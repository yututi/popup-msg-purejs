const path = require('path');

const webpack = {
    entry: './src/index.js',
    output: {
        filename: 'popup-msg.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "window"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = (env, argv) => {
    if (argv.mode === "development") {
        webpack.output.path = path.join(__dirname, 'example');
        webpack.devServer = {
            // open: true,
            // openPage: "index.html",
            contentBase: path.join(__dirname, "example"),
            watchContentBase: true,
        }
    }
    return webpack;
};