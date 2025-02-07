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

https://ionicframework.com/docs/intro/vscode-extension

推荐使用插件，命令行也行！

android调试桥，可以通过插件**ionic**配置。

![image-20221002233445818](readme.assets/image-20221002233445818.png)

## 基于react开发App

支持cdn开发

```
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>

<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

支持react-cli and vue-cli等框架脚手架整合开发

https://ionicframework.com/docs/intro/cdn

**推荐使用ionic cli命令行进行直接开发**

```
# 安装脚手架，同样是基于脚手架开发的。
$ npm uninstall -g ionic
$ npm install -g @ionic/cli native-run

# 支持步次配置类似npm init
$ ionic start

# 安装模板，可以通过ionic start --help
# 选项卡tabs 侧边菜单sidemenu 单页空项目blank
$ ionic start myApp tabs --type react|vue|angular|ionic1

# 查看所有可用模板
ionic start --list

# web端调试
$ ionic serve
$ npm start
```

基础目录

```
src/
├── app/
├── assets/
├── environments/
├── theme/
├── global.scss
├── index.html
├── main.ts
├── polyfills.ts
├── test.ts
└── zone-flags.ts
```

```
src/
└── app/
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.spec.ts
    ├── app.component.ts
    └── app.module.ts
```

如果你使用了模板，那就是模板的目录。

shell命令：

https://ionicframework.com/docs/cli

```
# 提示选择生成的新功能
$ ionic generate
? What would you like to generate?
❯ page
  component
  service
  module
  class
  directive
  guard
```

### capacitor框架

为了构建Android and IOS 应用，我们还需要引入新的框架capacitorjs

https://capacitorjs.com/docs/getting-started/with-ionic

```
# 这个必须在原有ionic project的基础上，开启capacitor功能
$ ionic integrations enable capacitor
```

如果是原生的html+css+js的项目，则还需要参考：

https://capacitorjs.com/docs/getting-started

方式一：

```
# 直接创建新的capacitor项目：会问问题
$ npm init @capacitor/app
```

方式二：

```
# 在已有的老项目上，导入capacitor
$ npm i @capacitor/core
$ npm i -D @capacitor/cli

# 初始化：会问问题
$ npx cap init

# 安装平台包（前提是安装了xcode and Android studio）
$ npm i @capacitor/android @capacitor/ios
$ npx cap add android
$ npx cap add ios

# 同步到android and ios包中
npx cap sync
```

#### 基础插件

```
$ npm i @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
```

常用capacitor插件已放入本文[最后](#应用常用插件)。如图标，闪图，摄像头，蓝牙，分享，定位等等常用功能。

#### 添加移动平台到应用程序

```
$ ionic capacitor add android
$ ionic capacitor add ios
```

```
src/
├── xxx
└── xxxx
android/
├── xxx
└── xxxx
ios/
├── xxx
└── xxxx
```

#### 其他常用命令

- [`ionic capacitor add`](https://ionicframework.com/docs/cli/commands/capacitor-add)

添加平台包到根目录中

```
$ ionic capacitor add android|ios
```

- [`ionic capacitor build`](https://ionicframework.com/docs/cli/commands/capacitor-build?_gl=1*rumdbm*_ga*MTc3ODkxMzg2NS4xNjYzODU3NDgx*_ga_REH9TJF6KF*MTY2ODk3MzgzNC44Mi4xLjE2Njg5NzYyODAuMC4wLjA.)

将web资源赋值到 android|ios包中

```
$ ionic build
$ ionic capacitor build android
```

后续就是签名和打包了

- [`ionic capacitor run`](https://ionicframework.com/docs/cli/commands/capacitor-run)

执行模拟器。。。

```
$ ionic capacitor run [options]
```

https://ionicframework.com/docs/cli/commands/capacitor-run

可携带参数：例如

```
$ ionic capacitor run android -l --external
```

- [`ionic capacitor open`](https://ionicframework.com/docs/cli/commands/capacitor-open)

```
$ ionic capacitor open android
```

打开平台编辑器[具体方法](#构建原生App)：

1.生成签名文件

2.使用签名文件，构造app

#### **特殊命令**

合并命令：等价于ionic build + ionic capacitor build

```
$ ionic capacitor copy [options]
```

- [`ionic capacitor sync`](https://ionicframework.com/docs/cli/commands/capacitor-sync)

合并命令：等价于ionic capacitor copy + ionic capacitor update

```
$ ionic capacitor sync [options]
```

```
# 更新ionic的依赖项和插件
$ ionic capacitor update [options]
```

获取**ionic.config.json**中的配置值

```
$ ionic config get [options]
```

设置**ionic.config.json**中的配置值

```
$ ionic config set [options]
```

删除**ionic.config.json**中的配置值

```
$ ionic config unset [options]
```

### 路由IonReactRouter

这里我们使用官方二次封装的react-router路由IonReactRouter。

https://ionicframework.com/docs/react/navigation

```
# 我们使用模板时，已经默认安装了.
# 使用的还是react-router-dom@5中的组件
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
```

完美兼容react-router-dom@5中的路由语法。

### 状态MobX

这里我们使用MobX进行全局状态管理。**天生Proxy，轻松实现深度监听。**

![image-20221029153032287](readme.assets/image-20221029153032287.png)

https://zh.mobx.js.org/README.html

```
# 只安装mobx，则我们需要自行构建响应式数据流
npm install --save mobx
# 推荐使用react-mobx or mobx-react-lite 选其一即可构建响应式数据流
# 支持class和function组件
npm i mobx-react
# lite只支持hook函数式组件
npm i mobx-react-lite
```

#### 创建可观察对象

**计算属性computed**

**观测属性observable**

**动作方法action**

**异步方法async**

三种方法：

class类方法：可以配置的相当细，但是麻烦！

![image-20221028184258566](readme.assets/image-20221028184258566.png)

function函数方法：常用方法

![image-20221028184323167](readme.assets/image-20221028184323167.png)

object对象方法

![image-20221028184516511](readme.assets/image-20221028184516511.png)

##### ★异步转同步

不需要额外的插件。

![image-20221029152438040](readme.assets/image-20221029152438040.png)

##### 用法：

**默认脚手架都是react**。毕竟vue的vuex和pinia更好用。。。

1.只用初始值(没必要用)

其实毫无意义，react-class组件直接定义state，react-function组件直接定义useState。

不管使用哪种方法，创建的可观察对象。

```
import store from "../mobx/store"
// 如果store是class类
const store = new store(*args)
store.value

// 如果store是function函数
const store = store()
store.value()

// 如果store是object对象
store.value
```

2.使用props进行传参（用的少）

![image-20221029153247876](readme.assets/image-20221029153247876.png)

3.使用context进行传参（推荐方法）

**实现了全局状态共享，但是组件内部还需要自行监听store的属性变化，才能重新渲染对应组件。**

![image-20221029153649909](readme.assets/image-20221029153649909.png)

★手动实现响应式组件

1.手动更新单向数据流

![image-20221029154709602](readme.assets/image-20221029154709602.png)

![image-20221029154807379](readme.assets/image-20221029154807379.png)

2.利用autorun进行自动更新

![image-20221029155622132](readme.assets/image-20221029155622132.png)

3.利用Observer进行自动更新（官方推荐）

![image-20221029155852608](readme.assets/image-20221029155852608.png)

#### react专用插件

![image-20221029151432858](readme.assets/image-20221029151432858.png)

##### ★HOC高阶组件context嵌套用法

这个是最常用的方案，实现全局组件的响应式。

![image-20221029160117582](readme.assets/image-20221029160117582.png)

![image-20221029160154007](readme.assets/image-20221029160154007.png)

##### 多Store合并

![image-20221029151627265](readme.assets/image-20221029151627265.png)



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

官方也支持cloud 需要先注册账号！

https://dashboard.ionicframework.com/personal/apps

```
# 安装两个平台包
$ npm i @capacitor/android @capacitor/ios
```

### 模拟器测试

具体用法，需要查看官网内容

```
1.安装包
npx ionic cap add android|ios

2.构建
npx ionic cap build

3.这里我们存在图标插件(根据参数设置)
npx capacitor-assets generate <options>

4.同步一下插件内容
npx ionic cap sync

5.启动测试(-l重新加载，--target=目标虚拟机，--external开发服务器，公共地址--public-host=)
npx ionic cap run android -l --external --target=ionicReact --public-host=192.168.1.26
```

![image-20221121080203183](readme.assets/image-20221121080203183.png)

### 签名

打开对应平台。

https://developer.android.com/studio/publish/app-signing?hl=zh-cn#generate-key

```
$ npx ionic cap open android|ios
```

![image-20221121094424238](readme.assets/image-20221121094424238.png)

![image-20221121094726829](readme.assets/image-20221121094726829.png)

![image-20221121095931978](readme.assets/image-20221121095931978.png)

生成密钥

![image-20221121095825089](readme.assets/image-20221121095825089.png)

![image-20221121100115417](readme.assets/image-20221121100115417.png)

点击完成，即生成app-release.apk了

### 构筑app

![image-20221121100351912](readme.assets/image-20221121100351912.png)

带有签名的正式版app已经构建完毕，上线各种应用市场即可。

### 包执行器npx语法

更好用的shell语法

```
$ npx ionic --help
$ npx ionic cap --help

举例：
# 安装安卓调试包
$ npx ionic cap add android
# 执行安卓调试，需要带参数
$ npx ionic cap run android
# 执行web调试，需要带参数
$ npx ionic serve
```

## PWA渐进式应用





## ionic生命周期





## 虚拟滚动







## 数据存储

https://ionicframework.com/docs/react/storage

加密存储sqllite



非加密存储storage



## 应用常用插件

https://capacitorjs.com/docs/plugins

https://capacitorjs.com/docs/cordova/migrating-from-cordova-to-capacitor

**这里有巨坑！！**

官方文档更新的不够及时，很多插件其实已经被弃用，npm install xxx 存在大量的坑。

| 插件      | 状态                 | 官网                                   |
| --------- | -------------------- | -------------------------------------- |
| Capacitor | 官方维护插件         | https://capacitorjs.com/docs/apis      |
|           | 社区维护插件         | https://github.com/capacitor-community |
| Cordova   | 官方不推荐。依然兼容 | https://cordova.apache.org/plugins/    |

### 应用图标

坑点：依赖包需要挂梯子！Dependent: [sharp](https://www.npmjs.com/package/cordova-res) [libvips](https://github.com/libvips/libvips)

https://github.com/ionic-team/capacitor-assets

```
# 不推荐
npm install -g cordova-res
# 官方推荐
npm install @capacitor/assets
```

这里我们使用简易模式：

```
# 项目root中创建assets/resources文件夹
assets/resources
├── logo.png/icon.png
└── logo-dark.png/icon-dark.png
src/
├── xxx
└── xxxx
public/
├── xxx
└── xxxx
...
```

```
# 执行构筑命令
npx capacitor-assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222' --splashBackgroundColor '#eeeeee' --splashBackgroundColorDark '#111111'
```

```
--iosProject
iOS项目的路径（默认ios/App）
--androidProject
Android 项目的路径（默认android）
--assetPath <path>
项目资产目录的路径。默认情况下将按顺序检查"assets"和目录"resources"
--iconBackgroundColor
为光模式生成图标层时使用的背景颜色（十六进制值）（默认#ffffff）
--iconBackgroundColorDark
为暗模式（支持时）生成图标层时使用的背景颜色（十六进制值）（默认#111111）
--splashBackgroundColor
生成初始屏幕时使用的背景颜色（十六进制值）（默认#ffffff）
--splashBackgroundColorDark
为暗模式生成启动画面时使用的背景颜色（十六进制值）（如果支持）（默认#111111）
--logoSplashTargetWidth
从单个徽标文件生成初始屏幕时将徽标设置为的特定宽度（默认情况下不使用，徽标按比例缩放为初始屏幕的百分比，请参阅--logoSplashScale）
--logoSplashScale 
从单个徽标文件生成启动画面时应用于徽标的比例乘数（默认值0.2：）
--ios
明确运行 iOS 资产生成。使用平台标志使平台列表独占。
--android 
显式运行 Android 资产生成。使用平台标志使平台列表独占。
--pwa
(默认)显式运行 Android 资产生成。使用平台标志使平台列表独占。
```

自定义模式：

```
assets/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png
```

```
npx capacitor-assets generate --pwa
```

### 闪图广告

一般用作开屏广告！

```
npm install @capacitor/splash-screen
```



### 走马灯

官方地址：[Swiper.js](http://swiperjs.com/)



### 相机



### 蓝牙



### 状态栏



### 推送通知



### 设备信息



### 地理定位



### 微信sdk



### 支付宝sdk



### 云闪付sdk



## 创建插件

https://capacitorjs.com/docs/apis/keyboard#


## 其他app交互

App 和 H5 通信App 和 H5 通信和 JSBridge 其实是两个概念，不要混淆。App 和 H5 通信有多种，而 JSBridge 只是其中能实现 App 和 H5 通信的一种方式。常见的 App 和 H5 通信方式：URL Scheme
URL Scheme 是一种自定义的URL协议，允许 H5 页面通过链接到特定的格式触发 APP 内部的操作。例如，当H5页面中的链接被点击时，可以利用URL Scheme 唤起 APP 并执行预定义的动作，或者传递参数给 APP。这种方式适用于简单的跳转和数据传递，但功能有限，且用户体验可能因需要先打开系统浏览器再跳转至 APP 而受到影响。developer.baidu.com/article/det…[1]postMessage是HTML5引入的一个API，它允许来自不同源的脚本在浏览器环境中进行异步通信。在原生APP嵌入H5页面的场景下，可以利用postMessage来实现两者间的双向通信。

juejin.cn/post/729442…[2]APP与H5之间可以通过WebSocket进行通信。WebSocket是一种在单个TCP连接上进行全双工通信的协议，它提供了浏览器和服务器之间的低延迟、持久化的连接，非常适合实时数据传输场景。JSBridge：JSBridge 的核心目的就是搭建一个桥梁，让运行在 WebView 中的 JavaScript 代码能够与宿主的原生应用程序（比如 Android 或 iOS 应用）互相通讯。本文的重点在于介绍第4种 App 和 H5 的通信方式即 JSBridge。为了彻底搞懂大家说的 JSBridge 是什么，我在网上翻阅了很多博客，然后自己摸摸索索，把实现 JSBridge 的代码写了一遍，这样直接看代码解释起来会更清晰。