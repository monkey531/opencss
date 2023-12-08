import path = require('path');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './opencss/styles/_variables.scss',
    output: {
        filename: 'opencss.min.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'opencss.min.css',
        }),
    ],
};
