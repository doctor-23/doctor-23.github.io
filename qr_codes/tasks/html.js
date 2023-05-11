const prod = './dist';
// const prod = require('path').basename(__dirname);
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
const webp_html = require("gulp-webp-html");

module.exports = function html() {
    return src(path.src.html)
        .pipe(include())
        // .pipe(webp_html())
        .pipe(dest(path.build.html))
        .pipe(bs.stream())
}