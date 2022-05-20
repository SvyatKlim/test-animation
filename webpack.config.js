const Webpack = require( 'webpack' );
const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const PATH_ASSETS = path.resolve(__dirname, 'assets');

module.exports = {
    entry: {
        scripts: './src/app.js',
    },

    output: {
        filename: 'js/[name].js',
        path: PATH_ASSETS
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        context: 'src',
                        name: '[path]/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(ttf|eot|otf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[folder]/[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/styles.css',
            chunkFilename: 'styles/[id].css'
        }),
        new CssMinimizerPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: [
                'src/**/*',
                '*.html'
            ],
            server: { baseDir: ['.'] },
            watch: true,
        }),
        new StylelintPlugin({
            context: './src',
            failOnError: false
        })
    ],
};
