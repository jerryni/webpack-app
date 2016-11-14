# webpack starter

简洁的, 可自己选择js框架(reactjs, vuejs, angularjs)的webpack脚手架

## Environment

node: v4.6.0(官方推荐)

## 特性

- es2015, async/await
- scss
- eslint
- file-loader, url-loader, html-loader
- multiple generate html-file
- sourcemap
- hash

## Start 

> npm install

develop with live-server:

> npm start

build files to path `./build`
> webpack

## file tree
```js
├── app                        // app入口
│   ├── index.js              
│   └── scss                   // 样式文件夹
│       └── main.scss
├── html_templates             // html模板
│   ├── index.html               
│   └── page1.html               
├── build                        
│   ├── bundle.js
│   └── index.html
├── package.json               // npm配置文件
└── webpack.config.js          // webpack配置文件
```
