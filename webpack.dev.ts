import { merge } from 'webpack-merge';
import common from './webpack.common';
import { Configuration } from 'webpack';

const devConfig: Configuration = merge(common, {
    mode: 'development',
});

export default devConfig;
