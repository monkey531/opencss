import { merge } from 'webpack-merge';
import common from './webpack.common';
import { Configuration } from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const prodConfig: Configuration = merge(common, {
    mode: 'production',
    output: {
        filename: 'opencss.bundle.js',
    },
    optimization: {
        minimize:true,
    },
    plugins: [

    ],
});

export default prodConfig;
