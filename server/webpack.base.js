module.exports = {
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
}