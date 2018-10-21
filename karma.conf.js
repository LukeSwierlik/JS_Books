var webpackConfig = require('./webpack/webpack.config.dev.js');

module.exports = function (config) {
    config.set({
        basePath: './src',
        browsers: ['ChromeHeadless'],
        files: [
            {pattern: './**/*.spec.js', watched: true}
        ],
        webpack: {
            module: Object.assign(webpackConfig.module, {
                rules: [
                    {
                        type: 'javascript/auto',
                        test: /\.json$/,
                        loader: 'raw-loader',
                    },
                    {
                        test: /\.s?css$/,
                        loader: 'ignore-loader'
                    },
                    {
                        test: /\.html$/,
                        loader: 'ignore-loader'
                    }]
            })
        },
        webpackMiddleware: {
            noInfo: true
        },
        frameworks: ['jasmine'],
        preprocessors: {
            './**/*.spec.js': ['webpack']
        },
        devServer: false,
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
};