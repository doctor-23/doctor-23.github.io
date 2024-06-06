const {resolve} = require('path');
const fs = require('fs-extra');
const packageJsonPath = resolve(__dirname, './../package.json');
const packageJson = fs.readJsonSync(packageJsonPath);
const prod = `./${packageJson.name}`;
const app = './app';

const {
    src,
    dest
} = require('gulp');

const path = {
    build: {
        html: `${prod}/`
    },
    src: {
        html: [`${app}/**/*.html`, `!${app}/**/_*.html`]
    }
}

const include = require('gulp-file-include');
const bs = require('browser-sync');

module.exports = function html() {
    return src(path.src.html)
        .pipe(include())
        .pipe(dest(path.build.html))
        .pipe(bs.stream())
}
