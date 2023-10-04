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

module.exports = function html() {
    return src(path.src.html)
        .pipe(include())
        .pipe(dest(path.build.html))
        .pipe(bs.stream())
}
