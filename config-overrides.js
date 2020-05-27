const { resolve } = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = resolve(__dirname, 'client', 'src', 'index.js');
        paths.appSrc = resolve(__dirname, 'client', 'src');
        paths.appPublic = resolve(__dirname, 'client', 'public');
        paths.appHtml = resolve(__dirname, 'client', 'public', 'index.html');
        paths.appBuild = resolve(__dirname, 'server', 'client');
        return paths;
    }
}