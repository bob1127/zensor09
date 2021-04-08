const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
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