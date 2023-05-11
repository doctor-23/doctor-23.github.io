const prod = './dist';
// const prod = require('path').basename(__dirname);
const app = './app';

const plugins = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/@fancyapps/ui/dist/fancybox.umd.js',
    'node_modules/slick-slider/slick/slick.js',
    'node_modules/inputmask/dist/jquery.inputmask.js',
];

const {
    src,
    dest
} = require('gulp');

const path = {
    src: {
        libs: `${app}/js/libs/`
    },
    build: {
        js: `${prod}/js/`,
        libs: `${prod}/js/libs/`
    }
}

const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');
const multiDest = require("gulp-multi-dest");

module.exports = function libs_js(done) {
    if (plugins.length > 0)
        return src(plugins)
            .pipe(multiDest([path.src.libs, path.build.libs]))
            .pipe(map.init())
            .pipe(uglify())
            .pipe(concat('vendor.min.js'))
            .pipe(map.write('.'))
            .pipe(dest(path.build.js))
    else {
        return done(console.log(chalk.redBright('No added JS plugins')));
    }
}