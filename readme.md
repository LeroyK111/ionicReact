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

android调试桥，可以通过插件**ionic**配置。

https://developer.android.com/studio/command-line/adb?hl=zh-cn

![image-20221002233445818](readme.assets/image-20221002233445818.png)

## 基于react开发App

```
# 安装脚手架，同样是基于脚手架开发的。
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

# 安装模板，可以通过ionic start --help
ionic start myApp tabs --type react

# 启动命令
$ ionic start
$ ionic serve
```

安装完毕

```
进入项目
cd .\ionicReact
启动服务
ionic serve
构建电容器
ionic capacitor add 
生成图标和启动画面
cordova-res --skip-config --copy
原生组件
https://ion.link/docs
企业级功能
https://ion.link/enterprise-edition
```

### 路由IonReactRouter

这里我们使用官方二次封装的react-router路由。

https://ionicframework.com/docs/react/navigation

```
我们使用模板时，已经默认安装了
```



### 状态MobX

这里我们使用MobX进行全局状态管理。

https://zh.mobx.js.org/README.html

```
# 安装mobx
npm install --save mobx
```





### 基于ionic的高阶HOC组件

#### root根组件App.tsx

**常规的react组件必须包装才能使用。**每个项目只能存在一个IonApp根组件

![image-20221003193526602](readme.assets/image-20221003193526602.png)

#### pages页面组件Tab.tsx

每个视图必须包含一个`IonPage`组件。没有它，页面转换将无法正常工作。有关详细信息，请参阅[IonPage 文档](https://ionicframework.com/docs/react/navigation#ionpage)。

![image-20221003195051558](readme.assets/image-20221003195051558.png)

#### 原生组件components

![image-20221003194929069](readme.assets/image-20221003194929069.png)











## 构建原生App

```
# 添加电容器
ionic integrations enable capacitor
# 开始构建build
ionic build
# 安装安卓调试包
npx ionic cap add android
# 执行安卓调试，需要带参数
npx ionic cap run android
# 执行web调试，需要带参数
npx ionic server
```











## 应用常用插件

### 启动图片



### 应用图标

### 前景图标

### 后景图标



### 微信sdk

### 支付宝sdk

### 云闪付sdk
