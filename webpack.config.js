var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var EncodingPlugin = require('webpack-encoding-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {

    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: '/dist'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            },
            {

                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                            minimize: false
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|jpg|png|svg)$/,

                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'quiz.html',
        //     template: 'src/quiz.html'
        // }),
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'Popper': 'popper.js/dist/umd/popper'
        }),
        new EncodingPlugin({
            encoding: 'UTF-8'
        })
    ]
};