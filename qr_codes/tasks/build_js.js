const prod = './dist';
// const prod = require('path').basename(__dirname);
const app = './app';

const {
    src,
    dest
} = require('gulp');

const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const map = require("gulp-sourcemaps");
const include = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");
const bs = require("browser-sync");

const path = {
    build: {
        js: `${prod}/js/`
    },
    src: {
        js: [`${app}/js/main.js`, `${app}/components/**/*.js`]
    }
}

module.exports = function build_js() {
    return src(path.src.js)
        .pipe(map.init())
        .pipe(include())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.build.js))
        .pipe(bs.stream())
}