const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var getWebpackConfig = (options) => {
    return {
        // mode: development|production
        mode: options.mode,
        // dev server: defines the port, compression and the "public" folder
        devServer: {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 5000
        },
        // entry file: all resources (e.g. css) must be included here
        entry: {
            app: path.join(__dirname, 'src', 'index.tsx')
        },
        target: 'web',
        resolve: {
            // react: require("react"),
            extensions: ['.ts', '.tsx', '.js']
        },
        // modules and rules for import (tsx and scss)
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: '/node_modules/'
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                      // Creates `style` nodes from JS strings
                      'style-loader',
                      // Translates CSS into CommonJS
                      'css-loader',
                      // Compiles Sass to CSS
                      'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loader: 'url-loader?limit=8000&name=images/[name].[ext]'
                }
            ],
        },
        // final output file
        output: {
            libraryTarget: "commonjs",
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        externals: {
            react: "react"
        },
        // dev tools for source maps (none or source map)
        devtool: options.devtool,
        // this plugin injects the index.js bundle into the index.html body
        plugins: [
            // new CopyWebpackPlugin({
            //     patterns: [
            //         { from: './src/Images', to: 'Images' }
            //     ],
            // }),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                filename: 'index.html',
                inject: 'body',
                hash: true
            })
        ]
    };
};

module.exports = getWebpackConfig;