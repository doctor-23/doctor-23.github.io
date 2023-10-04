const prod = './dist';
// const prod = require('path').basename(__dirname);

const del = require("del");

module.exports =  function clean() {
    return del(prod)
}
