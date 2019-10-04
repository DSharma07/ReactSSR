const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Informing webpack about the root file
    // of our server application
    entry: './src/client/client.js',

    // Informing webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')  // current working directory
    }
};

module.exports = merge(baseConfig, config);