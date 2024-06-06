const { execSync } = require('child_process');
const { basename, resolve } = require('path');
const { chdir } = require('process');
const fs = require('fs-extra');
let tmpPath;

const removeTmpDirectory = () => {
    const tmpPath = resolve(__dirname, 'tmp');

    fs.remove(tmpPath)
        .then(() => {
            console.log(`Директория ${tmpPath} успешно удалена.`);
        })
        .catch(err => {
            console.error(`Произошла ошибка при удалении директории ${tmpPath}:`, err);
        });
}

try {
    console.log('<<<< start');

    // console.log('Настройка пользователя Git...');
    // execSync('git config --global user.email "devilJin95@mail.ru"');
    // execSync('git config --global user.name "doctor-23"');
    console.log('Пользователь Git настроен.');

    console.log('Создание директории tmp...');
    tmpPath = resolve(__dirname, 'tmp');
    fs.ensureDirSync(tmpPath);
    console.log(`Директория tmp создана: ${tmpPath}`);

    console.log('Получения название проекта из package.json...');
    const packageJsonPath = resolve(__dirname, './package.json');
    const packageJson = fs.readJsonSync(packageJsonPath);
    const projectName = packageJson.name;
    console.log(`Имя проекта: ${projectName}`);

    const gitRepoUrl = packageJson.repository.url;
    console.log('Инициализация git и добавление удаленного репозитория...');
    execSync('git init');
    execSync('git checkout -b main');
    execSync(`git remote add origin ${gitRepoUrl}`);
    console.log('Git инициализирован и удаленный репозиторий добавлен.');

    console.log('Получение изменений из удаленного репозитория...');
    execSync('git fetch origin main');
    execSync('git pull origin main');

    console.log('Поиск директории с проектом...');
    const projectDirPath = resolve(__dirname, projectName);
    console.log(`Директория с проектом: ${projectDirPath}`);

    console.log('Создание директории с проектом внутри tmp...');
    const tmpProjectPath = resolve(__dirname, `tmp/${projectName}`);
    fs.ensureDirSync(tmpProjectPath);
    console.log(`Директория с проектом внутри tmp создана: ${tmpProjectPath}`);

    console.log('Копирование содержимого директории проекта в директорию tmp...');
    fs.copySync(projectDirPath, tmpProjectPath, { overwrite: true });
    console.log(`Директория проекта успешно скопирована в: ${tmpProjectPath}`);

    console.log('Добавление файлов и папок в git...');
    execSync('git add .');

    console.log('Коммит изменений...');
    execSync(`git commit -m "Deploying ${projectName}"`);

    console.log('Отправка изменений в репозиторий...');
    execSync('git push -u origin main');
    console.log('Файлы добавлены, закоммичены и запушены в репозиторий.');

    console.log('Удаление директории tmp...');
    removeTmpDirectory();
} catch (error) {
    console.error('Произошла ошибка:', error);
} finally {
    console.log('<<<< end');
}
