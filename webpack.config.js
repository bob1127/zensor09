const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const { webpack } = require('webpack');
module.exports = {
    externals: {
        webpack: 'webpack'
    },
    entry:{
         index: './src/js/index.js',
         product:'./src/js/product.js',
         socialApp:'./src/js/socialApp.js',
         product_detail:'./src/js/product_detail.js',
         aboutUs:'./src/js/aboutUs.js',
         product02:'./src/js/product02.js',
         product03:'./src/js/product03.js',
         service:'./src/js/service.js',
         
         
         
    },
    resolve:{
        alias: {
          $: path.resolve(__dirname, './src/js/number.js'),
          SplitText3: path.resolve(__dirname, './src/js/number.js'),
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jquery: 'jquery'
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
       
            chunks: ['manifest','vendor','index']
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: './src/product.html',
            chunks: ['manifest','vendor','product']
        }),
        new HtmlWebpackPlugin({
            filename: 'socialApp.html',
            template: './src/socialApp.html',
            chunks: ['manifest','vendor','socialApp']
        }),
        new HtmlWebpackPlugin({
            filename: 'product_detail.html',
            template: './src/product_detail.html',
            chunks: ['manifest','vendor','product_detail']
        }),new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html',
            chunks: ['manifest','vendor','aboutUs']
        })
        ,new HtmlWebpackPlugin({
            filename: 'product02.html',
            template: './src/product02.html',
            chunks: ['manifest','vendor','product02']
        }),
        new HtmlWebpackPlugin({
            filename: 'product03.html',
            template: './src/product03.html',
            chunks: ['manifest','vendor','product03']
        })

        ,new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/service.html',
            chunks: ['manifest','vendor','service']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].chunk.css'
            
        }),
       
       
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [

            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,

                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            }, {
                test: /\.css$/i,
                use: [


                    "style-loader",

                    "css-loader",
                ],
            }
        ],
    }
};