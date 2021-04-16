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
         Potentiostats:'./src/js/Potentiostats.js',
         ContactUs:'./src/js/ContactUs.js',
         ECWP100C:'./src/js/ECWP100C.js',
         aboutUs:'./src/js/aboutUs.js',
         Others:'./src/js/Others.js',
         ScreenPrintedElectrodes:'./src/js/ScreenPrintedElectrodes.js',
         service:'./src/js/service.js',
         ECAS100:'./src/js/ECAS100.js',
         ACIP100:'./src/js/ACIP100.js',
         MCP100:'./src/js/MCP100.js',
         SF100:'./src/js/SF100.js',
         PrintedElectrodes:'./src/js/PrintedElectrodes.js',
         CM100:'./src/js/CM100.js',
         CS100:'./src/js/CS100.js',
         CT100:'./src/js/CT100.js',
         
         
         
         
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
            filename: 'Potentiostats.html',
            template: './src/Potentiostats.html',
            chunks: ['manifest','vendor','Potentiostats']
        }),
        new HtmlWebpackPlugin({
            filename: 'ContactUs.html',
            template: './src/ContactUs.html',
            chunks: ['manifest','vendor','ContactUs']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECWP100C.html',
            template: './src/ECWP100C.html',
            chunks: ['manifest','vendor','ECWP100C']
        }),new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html',
            chunks: ['manifest','vendor','aboutUs']
        })
        ,new HtmlWebpackPlugin({
            filename: 'Others.html',
            template: './src/Others.html',
            chunks: ['manifest','vendor','Others']
        }),
        new HtmlWebpackPlugin({
            filename: 'ScreenPrintedElectrodes.html',
            template: './src/ScreenPrintedElectrodes.html',
            chunks: ['manifest','vendor','ScreenPrintedElectrodes']
        })

        ,new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/service.html',
            chunks: ['manifest','vendor','service']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECAS100.html',
            template: './src/ECAS100.html',
            chunks: ['manifest','vendor','ECAS100']
        }),
        new HtmlWebpackPlugin({
            filename: 'ACIP100.html',
            template: './src/ACIP100.html',
            chunks: ['manifest','vendor','ACIP100']
        }),
        new HtmlWebpackPlugin({
            filename: 'MCP100.html',
            template: './src/MCP100.html',
            chunks: ['manifest','vendor','MCP100']
        }),
        new HtmlWebpackPlugin({
            filename: 'SF100.html',
            template: './src/SF100.html',
            chunks: ['manifest','vendor','SF100']
        }),
        new HtmlWebpackPlugin({
            filename: 'PrintedElectrodes.html',
            template: './src/PrintedElectrodes.html',
            chunks: ['manifest','vendor','PrintedElectrodes']
        }),
        new HtmlWebpackPlugin({
            filename: 'CM100.html',
            template: './src/CM100.html',
            chunks: ['manifest','vendor','CM100']
        }),
        new HtmlWebpackPlugin({
            filename: 'CS100.html',
            template: './src/CS100.html',
            chunks: ['manifest','vendor','CS100']
        }),
        new HtmlWebpackPlugin({
            filename: 'CT100.html',
            template: './src/CT100.html',
            chunks: ['manifest','vendor','CT100']
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