const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Informing webpack that we're building a bundle
    // from nodejs, rather than browser
    target: 'node',

    // Informing webpack about the root file
    // of our server application
    entry: './src/index.js',

    // Informing webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')  // current working directory
    },

    externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);