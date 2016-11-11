var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

// 定义文件夹目录
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')
var TEM_PATH = path.resolve(ROOT_PATH, 'html_templates')

module.exports = {
    // 项目入口文件
    entry: {
        //三个入口文件，app, mobile和 vendors
        app: path.resolve(APP_PATH, 'index.js'),
        page1: path.resolve(APP_PATH, 'page1.js')
        // vendors: ['jquery', 'moment']
    },

    // 输出路径( webpack打包完后 )
    output: {
        path: BUILD_PATH,
        filename: '[name].js' // 他会根据entry的入口文件名称生成多个js文件
    },

    devtool: 'eval-source-map', // js source-map

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
            loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
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
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192' //小于8k的图片, 一般就是雪碧图
        }, {
            include: APP_PATH,
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'file-loader'
        }, {
            test: /\.html$/,
            loader: 'html'
        }]
    },

    // 插件, 自动生成html文件
    plugins: [
        new htmlWebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'page1.html'),
            filename: 'page1.html',
            chunks: ['page1'],
            inject: 'body'
        })
    ]

}