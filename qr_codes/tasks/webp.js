const prod = './dist';
// const prod = require('path').basename(__dirname);
const app = './app';

const {src, dest} = require('gulp');

const path = {
    src: {
        img: app + '/img/**/*.+(png|jpg|jpeg|gif|svg|ico)',
        img_dir: `${app}/img/`
    },
    build: {
        img_webp: prod + '/img/**/*.+(png|jpg|jpeg)',
        img: `${prod}/img/`
    }
}

const webpConv = require('gulp-webp');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

module.exports = function webp() {
    return src(path.build.img_webp)
        .pipe(plumber())
        .pipe(changed(path.build.img_webp, {
            extension: '.webp'
        }))
        .pipe(webpConv())
        .pipe(dest(path.build.img))
}