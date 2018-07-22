const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// 定义文件夹目录
const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'app')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')
const TEM_PATH = path.resolve(ROOT_PATH, 'html_templates')

module.exports = {
    // 项目入口文件
    entry: {
        //三个入口文件，app, mobile和 vendors
        app: path.resolve(APP_PATH, 'index.js'),
        page1: path.resolve(APP_PATH, 'page1.js')
    },

    mode: 'development',

    // 输出路径( webpack打包完后 )
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js' // 他会根据entry的入口文件名称生成多个js文件
    },

    devServer: {
        hot: true
    },

    module: {

        // css这种东西 由于node本地仅支持js加载, 所以css这种需要loader..
        rules: [{
            test: /\.s?css$/, // 注意loaders的处理顺序是从右到左的
            use: [
                'style-loader', // creates style nodes from JS strings
                'css-loader', // translates CSS into CommonJS
                'sass-loader' // compiles Sass to CSS
            ]
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: 'babel-loader'
        }, {
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'url-loader', options: {
                    limit: 8192
                }
            }]
        }, {
            test: /\.(png|jpe?g|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
            use: 'file-loader'
        }]
    },

    // 插件, 自动生成html文件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'page1.html'),
            filename: 'page1.html',
            chunks: ['page1'],
            inject: 'body'
        })
    ]

}
