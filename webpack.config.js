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
        
         ContactUs:'./src/js/ContactUs.js',
   
         aboutUs:'./src/js/aboutUs.js',
     
       
         service:'./src/js/service.js',
       
        
         AllProducts:'./src/js/AllProducts.js',
         ProductCatagory:'./src/js/ProductCatagory.js'
        
        
         
         
         
         
         
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
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'ContactUs.html',
            template: './src/ContactUs.html',
            chunks: ['manifest','vendor','ContactUs']
        }),
        new HtmlWebpackPlugin({
            filename: 'PrintedElectrodes.html',
            template: './src/PrintedElectrodes.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECWP100C.html',
            template: './src/ECWP100C.html',
            chunks: ['manifest','vendor','AllProducts']
        }),new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html',
            chunks: ['manifest','vendor','aboutUs']
        })
        ,new HtmlWebpackPlugin({
            filename: 'Others.html',
            template: './src/Others.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'ScreenPrintedElectrodes.html',
            template: './src/ScreenPrintedElectrodes.html',
            chunks: ['manifest','vendor','ProductCatagory']
        })

        ,new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/service.html',
            chunks: ['manifest','vendor','service']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECAS100.html',
            template: './src/ECAS100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'ACIP100.html',
            template: './src/ACIP100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'MCP100.html',
            template: './src/MCP100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'SF100.html',
            template: './src/SF100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECD100.html',
            template: './src/ECD100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
      
        new HtmlWebpackPlugin({
            filename: 'CM100.html',
            template: './src/CM100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'CS100.html',
            template: './src/CS100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'CT100.html',
            template: './src/CT100.html',
            chunks: ['manifest','vendor','AllProducts']
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