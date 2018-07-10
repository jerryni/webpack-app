# webpack starter

简洁的, 可自选js框架(reactjs, vuejs, angularjs)的webpack脚手架

## Environment

node: v4.6.0(官方推荐)
node: v8.x

## 特性

- es2015, async/await
- scss
- eslint
- file-loader, url-loader, html-loader
- multiple generate html-file
- hash

## Start 

> npm i

develop with live-server:

> npm run dev

build files to path `./build`
> npm run build

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
