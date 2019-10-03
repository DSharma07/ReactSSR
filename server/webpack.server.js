const path = require('path');

module.exports = {
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

    // Informing webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader', // executes babel and transpile the code
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', // take all jsx and covert into js code
                        'stage-0', // handle all async code
                        ['env', { targets: { browsers: ['last 2 versions']}}]  // compatible on all popular browsers
                    ]
                }
            }
        ]
    }

};