const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'popup-msg.js',
        path: path.resolve(__dirname, 'dist'),
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
                    loader: 'babel-loader',   //loader名
                    options: {                //Babelの設定
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};