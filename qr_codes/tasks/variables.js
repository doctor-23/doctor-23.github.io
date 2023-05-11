const app = './app';
const production = './dist';

const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const map = require("gulp-sourcemaps");
const include = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");
const bs = require("browser-sync");
const del = require("del");
const fs = require('fs');
const chalk = require('chalk');
const webp_html = require("gulp-webp-html");
const multiDest = require("gulp-multi-dest");
const sass = require('gulp-sass');
const clean = require("gulp-clean-css");
const fonter = require("gulp-fonter");
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const webp_css = require("gulp-webpcss");
const group_media = require("gulp-group-css-media-queries");
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttftowoff2');
const webpConv = require('gulp-webp');

const path = {
    build: {
        fonts_css: `${production}/fonts/`,
        fonts: `${production}/fonts/`,
        // =================================
        html: `${production}/`,
        // =================================
        css: `${production}/css/`,
        libs_css: `${production}/css/libs/`,
        // =================================
        js: `${production}/js/`,
        libs_js: `${production}/js/libs/`,
        // =================================
        img: `${production}/img/`,
        svg: `${production}/img/icons/`,
        webp: `${production}/img/**/*.+(png|jpg|jpeg)`,
    },
    src: {
        fonts_css: `${app}/scss/_fonts.scss`,
        fonts: `${app}/fonts/*.ttf`,
        // =================================
        html: [`${app}/**/*.html`, `!${app}/**/_*.html`],
        // =================================
        scss: [`${app}/scss/main.scss`, `${app}/components/*.scss`],
        libs_css: `${app}/css/libs/`,
        // =================================
        js: [`${app}/js/main.js`, `${app}/components/**/*.js`],
        libs_js: `${app}/js/libs/`,
        dev_js: [`${app}/js/01_main.js`, `${app}/components/**/*.js`],
        // =================================
        img_dir: `${app}/img/`,
        img: app + '/img/**/*.+(png|jpg|jpeg|gif|svg|ico)',
        svg: `${app}/img/icons/*.svg`,
    }
};

const js_plugins = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-slider/slick/slick.js',
    'node_modules/inputmask/dist/jquery.inputmask.js',
];

const style_plugins = [
    'node_modules/slick-slider/slick/slick.css',
    'node_modules/slick-slider/slick/slick-theme.css',
];
