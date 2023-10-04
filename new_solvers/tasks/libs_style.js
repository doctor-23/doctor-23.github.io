const prod = './dist';
// const prod = require('path').basename(__dirname);
const app = './app';

const plugins = [
    'node_modules/@fancyapps/ui/dist/fancybox.css',
    'node_modules/slick-slider/slick/slick.css',
    'node_modules/slick-slider/slick/slick-theme.css',
];

const {
    src,
    dest
} = require('gulp');

const path = {
    src: {
        libs: `${app}/css/libs/`
    },
    build: {
        css: `${prod}/css/`,
        libs: `${prod}/css/libs/`
    }
}

const sass = require('gulp-sass');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');
const clean = require("gulp-clean-css");
const multiDest = require('gulp-multi-dest');

module.exports = function libs_style(done) {
    if (plugins.length > 0) {
        return src(plugins)
            .pipe(multiDest([path.src.libs, path.build.libs]))
            .pipe(map.init())
            .pipe(sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError))
            .pipe(clean())
            .pipe(concat('vendor.min.css'))
            .pipe(map.write('.'))
            .pipe(dest(path.build.css))
    } else {
        return done(console.log(chalk.redBright('No added CSS/SCSS plugins')));
    }
}
