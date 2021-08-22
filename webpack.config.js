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
         article:'./src/js/article.js',

        
         AllProducts:'./src/js/AllProducts.js',
         ProductCatagory:'./src/js/ProductCatagory.js',
         ECWP100S:'./src/js/ECWP100S.js',
         PrintedElectrodes_custom:'./src/js/PrintedElectrodes_custom.js',
         Privacy:'./src/js/Privacy.js',
         wechat:'./src/js/wechat.js',
        //  ECWP100:'./src/EN/js/ECWP100.js',


       
        
        
         
         
         
         
         
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
            filename: 'AllProducts.html',
            template: './src/AllProducts.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'OthersProducts.html',
            template: './src/OthersProducts.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'AllProducts01.html',
            template: './src/AllProducts01.html',
            chunks: ['manifest','vendor','allproduct']
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
            filename: 'PrintedElectrodes_custom.html',
            template: './src/PrintedElectrodes_custom.html',
            chunks: ['manifest','vendor','PrintedElectrodes_custom']
        }),
        new HtmlWebpackPlugin({
            filename: 'Privacy.html',
            template: './src/Privacy.html',
            chunks: ['manifest','vendor','Privacy']
        }),
        new HtmlWebpackPlugin({
            filename: 'Detail_privacy.html',
            template: './src/Detail_privacy.html',
            chunks: ['manifest','vendor','Privacy']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECWP100C.html',
            template: './src/ECWP100C.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
       
        new HtmlWebpackPlugin({
            filename: 'aboutUs.html',
            template: './src/aboutUs.html',
            chunks: ['manifest','vendor','aboutUs']
        })
        ,new HtmlWebpackPlugin({
            filename: 'ArticleList.html',
            template: './src/ArticleList.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article01.html',
            template: './src/Article01.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article02.html',
            template: './src/Article02.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article03.html',
            template: './src/Article03.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article04.html',
            template: './src/Article04.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article05.html',
            template: './src/Article05.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article06.html',
            template: './src/Article06.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article07.html',
            template: './src/Article07.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article08.html',
            template: './src/Article08.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article09.html',
            template: './src/Article09.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article10.html',
            template: './src/Article10.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article11.html',
            template: './src/Article11.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article12.html',
            template: './src/Article12.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article13.html',
            template: './src/Article13.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }), new HtmlWebpackPlugin({
            filename: 'Article14.html',
            template: './src/Article14.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'Article15.html',
            template: './src/Article15.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
         new HtmlWebpackPlugin({
            filename: 'Article16.html',
            template: './src/Article16.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        
        new HtmlWebpackPlugin({
            filename: 'ScreenPrintedElectrodes.html',
            template: './src/ScreenPrintedElectrodes.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
      
        new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/service.html',
            chunks: ['manifest','vendor','service']
        }),
        new HtmlWebpackPlugin({
            filename: 'service-1.html',
            template: './src/service-1.html',
            chunks: ['manifest','vendor','service']
        }),
        new HtmlWebpackPlugin({
            filename: 'ECAS100.html',
            template: './src/ECAS100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/ECAS100.html',
            template: './src/EN/ECAS100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
         new HtmlWebpackPlugin({
            filename: 'EN/ECWP100.html',
            template: './src/EN/ECWP100.html',
            chunks: ['manifest','vendor','AllProducts']
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
            filename: 'article.html',
            template: './src/article.html',
            chunks: ['manifest','vendor','article']
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
        new HtmlWebpackPlugin({
            filename: 'ECWP100S.html',
            template: './src/ECWP100S.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
 
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].chunk.css'
            
        }),
        new HtmlWebpackPlugin({
            filename: 'Download.html',
            template: './src/Download.html',
            chunks: ['manifest','vendor','Download']
        }),
        
       //English version

        new HtmlWebpackPlugin({
            filename: 'EN/index.html',
            template: './src/EN/index.html',
            chunks: ['manifest','vendor','index']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/aboutUs.html',
            template: './src/EN/aboutUs.html',
            chunks: ['manifest','vendor','aboutUs']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/ACIP100.html',
            template: './src/EN/ACIP100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/AllProducts.html',
            template: './src/EN/AllProducts.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/CM100.html',
            template: './src/EN/CM100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/ContactUs.html',
            template: './src/EN/ContactUs.html',
            chunks: ['manifest','vendor','ContactUs']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/CS100.html',
            template: './src/EN/CS100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/CT100.html',
            template: './src/EN/CT100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Detail_privacy.html',
            template: './src/EN/Detail_privacy.html',
            chunks: ['manifest','vendor','Privacy']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/ECWP100S.html',
            template: './src/EN/ECWP100S.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/MCP100.html',
            template: './src/EN/MCP100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/PrintedElectrodes.html',
            template: './src/EN/PrintedElectrodes.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Privacy.html',
            template: './src/EN/Privacy.html',
            chunks: ['manifest','vendor','Privacy']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/PrintedElectrodes_custom.html',
            template: './src/EN/PrintedElectrodes_custom.html',
            chunks: ['manifest','vendor','PrintedElectrodes_custom']
        }),

        new HtmlWebpackPlugin({
            filename: 'EN/service.html',
            template: './src/EN/service.html',
            chunks: ['manifest','vendor','service']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/service-1.html',
            template: './src/EN/service-1.html',
            chunks: ['manifest','vendor','service']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/SF100.html',
            template: './src/EN/SF100.html',
            chunks: ['manifest','vendor','AllProducts']
        }),
       
        new HtmlWebpackPlugin({
            filename: 'EN/ArticleList.html',
            template: './src/EN/ArticleList.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article01.html',
            template: './src/EN/Article01.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article02.html',
            template: './src/EN/Article02.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article03.html',
            template: './src/EN/Article03.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article04.html',
            template: './src/EN/Article04.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article05.html',
            template: './src/EN/Article05.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article06.html',
            template: './src/EN/Article06.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
       
        new HtmlWebpackPlugin({
            filename: 'EN/Article09.html',
            template: './src/EN/Article09.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article10.html',
            template: './src/EN/Article10.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article11.html',
            template: './src/EN/Article11.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article12.html',
            template: './src/EN/Article12.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article13.html',
            template: './src/EN/Article13.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article14.html',
            template: './src/EN/Article14.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),new HtmlWebpackPlugin({
            filename: 'EN/Article15.html',
            template: './src/EN/Article15.html',
            chunks: ['manifest','vendor','ProductCatagory']
        }),
        new HtmlWebpackPlugin({
            filename: 'EN/Article16.html',
            template: './src/EN/Article16.html',
            chunks: ['manifest','vendor','ProductCatagory']
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