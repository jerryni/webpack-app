var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

// 定义文件夹目录
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
    // 项目入口文件
    entry: APP_PATH,

    // 输出路径( webpack打包完后 )
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    // 开发服务器 实时监控改变
    devServer: {
        historApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },

    module: {
        // css这种东西 由于node本地仅支持js加载, 所以css这种需要loader..
        loaders: [{
            test: /\.scss$/, // 正则语法

            // 注意loaders的处理顺序是从右到左的
            loaders: ['style', 'css', 'sass'],
            include: APP_PATH
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH,
            query: {
                presets: ['es2015']
            }
        }, {
            include: APP_PATH,
            test: /\.png$/,
            loader: 'url-loader?limit=100000'
        }, {
            include: APP_PATH,
            test: /\.jpg$/,
            loader: 'file-loader'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },

    // 插件, 自动生成一个html文件
    plugins: [
        new htmlWebpackPlugin({
            title: 'hw app'
        })
    ]

}
