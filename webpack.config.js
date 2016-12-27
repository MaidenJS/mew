var path    = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname + "/client/js/"
    ],
    output: {
        path: path.join(__dirname, "./client"),
        publicPath: '/client',
        filename: 'bundle.js'
    },
    module: {
    }
};