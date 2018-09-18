

I、小程序构成

|-------app.js          主要是配置小程序的应用逻辑
|-------app.json      小程序全局配置 主要包括配置小程序所有页面路径、所有页面的窗口表现、网络超时设置、底部Tab等等
|-------pages          将所有功能页面统一放到一个文件夹便于管理
        |-------index   单个功能页面文件夹
                    |-------index.js    页面交互逻辑
                    |-------index.json 当前页面样式配置
                    |-------index.wxml 页面的结构
                    |-------index.wss    页面的样式
        | . . .            



1、app.json 主要内容如下：

{
  "pages":[ 
    "pages/index/index",              //pages字段是对页面路径的描述
    "pages/logs/logs"
  ],
  "window":{                              //对整个小程序的窗口样式设置 比如 顶部背景颜色，文字颜色定义
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
}

2、page.json 主要内容如下:

{
  "navigationBarBackgroundColor": "#ffffff",   //对当前页面的窗口配置会覆盖app.json中的窗口配置
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}

II、页面结构
1、index.wxml 相当于HTML，用来构建页面的结构 
①、小程序有用到和HTML一样的元素，但更丰富 它把一些经常用到的功能封装成一个组件 比如 地图Map等
②、小程序的XML中有一些 wx:if的表达式，主要是结构和交互逻辑，JS不直接操作DOM，而是管理状态，通过模板语法来描述状态和结构的关系

WXML 是这么写 :

<text>{{msg}}</text>
JS 只需要管理状态即可:

this.setData({ msg: "Hello World" })
通过 {{ }} 的语法把一个变量绑定到界面上，我们称为数据绑定。仅仅通过数据绑定还不够完整的描述状态和界面的关系，
还需要 if/else, for等控制能力，在小程序里边，这些控制能力都用 wx: 开头的属性来表达。

2、index.wxss 相当于css
①、新增了尺寸单位  rpx
②、提供了全局的样式设置和局部样式设置  比如 app.json 和 page.json 局部方式会覆盖相同的全局样式


3、index.js  处理页面和用户的交互逻辑 比如下

<view>{{ msg }}</view>
<button bindtap="clickMe">点击我</button>
点击 button 按钮的时候，我们希望把界面上 msg 显示成 "Hello World"，于是我们在 button 上声明一个属性: bindtap ，在 JS 文件里边声明了 clickMe 方法来响应这次点击操作：

Page({
  clickMe: function() {
    this.setData({ msg: "Hello World" })
  }
})

III、小程序启动

1、打开小程序后 会把小程序的代码包下载到本地
2、通过app.json的pages获取所有页面路径，然后首页就被被加载渲染出来
3、小程序启动后 在app.js定义的App实例的 onLauncher 回调会被执行 （整个小程序只有一个 App 实例，是全部页面共享的）
4、pages文件下放的是所功能页面文件夹，微信客户端会先根据 xx.json 文件配置生成一个页面，顶部的颜色和文字可以在这个json中定义好。紧接着
客户端会装载这个页面的WXML结构和WXSS样式。最后客户端会装在xx.js， xx.js大体内容如下

Page({
  data: { // 参与页面渲染的数据
    logs: []
  },
  onLoad: function () {
    // 页面渲染后 执行
  }
})

注: Page 是一个页面构造器，这个构造器就生成了一个页面。在生成页面的时候，小程序框架会把 data 数据和 index.wxml 一起渲染出最终的结构，
于是就得到了你看到的小程序的样子。
在渲染完界面之后，页面实例就会收到一个 onLoad 的回调，你可以在这个回调处理你的逻辑。

-----------------------------------------------分界线-------------------------------------------

