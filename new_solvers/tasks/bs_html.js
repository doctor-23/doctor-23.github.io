const prod = './dist';
// const prod = require('path').basename(__dirname);
const app = './app';

const bs = require('browser-sync');

module.exports = function browserSync() {
    bs.init({
        server: {
            baseDir: prod,
            host: '192.168.0.104',
        },
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware("*", function (req, res) {
                    res.writeHead(302, {
                        location: "404.html"
                    });
                    res.end("Redirecting!");
                });
            }
        },
        browser: 'firefox',
        logPrefix: 'BS-HTML:',
        logLevel: 'info',
        logConnections: true,
        logFileChanges: true,
        open: true
    })
}
