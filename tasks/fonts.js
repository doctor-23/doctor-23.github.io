const {resolve} = require('path');
const fs = require('fs-extra');
const packageJsonPath = resolve(__dirname, './../package.json');
const packageJson = fs.readJsonSync(packageJsonPath);
const prod = `./${packageJson.name}`;
const app = './app';

const chalkPlug = require('chalk');

let srcFonts = `${app}/scss/_fonts.scss`;
let prodFonts = `${prod}/fonts/`;

module.exports = function fonts(done) {
    let file_content = fs.readFileSync(srcFonts);
    if (file_content == '') {
        fs.writeFile(srcFonts, '', cb);
        return fs.readdir(prodFonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(srcFonts, '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}

function cb() {
}
