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
    src: {
        img: app + '/img/**/*.+(png|jpg|jpeg|gif|svg|ico)',
    },
    build: {
        img: `${prod}/img/`
    }
}

const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const bs = require('browser-sync');
const plumber = require('gulp-plumber');

module.exports = function rastr() {
    return src(path.src.img)
        .pipe(plumber())
        .pipe(changed(path.build.img))
        .pipe(imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5,
            },
            [
                recompress({
                    loops: 6,
                    min: 50,
                    max: 90,
                    quality: 'high',
                    use: [pngquant({
                        quality: [0.8, 1],
                        strip: true,
                        speed: 1
                    })],
                }),
                imagemin.gifsicle(),
                imagemin.optipng(),
                imagemin.svgo()
            ], ), )
        .pipe(dest(path.build.img))
        .pipe(bs.stream())
}
