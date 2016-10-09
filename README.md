# webpack scaffolding

基于webpack的脚手架, 前端框架可以自己选择, 比如ReactJs...

## 目前已有demo

主要实现了网易前端大作业的内容:

- [查看效果](http://jerryni.github.io/netease/homework/)
- [查看作业说明及原生js实现版本(也就是第一次完成的版本)](https://github.com/jerryni/netease)

切到相关分支查看源码(运行需要在本地查看):

- [使用Regularjs来重写](https://github.com/jerryni/webpack-app/tree/regularjs)

## Start 

> npm install

develop:
> npm start

build
> npm build

## Features

- es2015
- scss

## 目录结构说明

```js
├── app                       项目根目录
│   ├── index.js              程序入口文件
│   └── scss                  css文件夹
│       └── main.scss
├── build                        
│   ├── bundle.js
│   └── index.html
├── package.json
└── webpack.config.js
```