# ionic开发笔记

归根结底，它只是 React。Ionic React 使用开放的 Web 标准和内置的浏览器功能，因此它与数以百万计的 Web 库中的任何一个都兼容。

官网地址：https://ionicframework.com/docs

底层Android和IOS系统的接口，已经被Ionic框架封装。

内核主要由WebKit负责，所以它可以直接当成浏览器使用。

开发环境要求：

1.首推MacOs，毕竟Xcode只能在mac上开发。。。Windows和Linux只能开发安卓应用。

2.模拟器：

Android Studio 模拟Android

Xcode 模拟IOS

3.nodejs引擎

4.版本管理git

## 安装vscode插件

https://marketplace.visualstudio.com/items?itemName=ionic.ionic

还是命令行粗暴。。。

![image-20221002233445818](readme.assets/image-20221002233445818.png)

## 基于react开发App

```
安装脚手架，同样是基于脚手架开发的。
$ npm uninstall -g ionic
$ npm install -g @ionic/cli
启动命令
$ ionic start
$ ionic serve
```

