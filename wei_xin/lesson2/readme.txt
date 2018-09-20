

I、小程序构成

小程序包含一个描述整体程序的app和多个描述各自页面的page 主要由以下几个部分组成

|-------app.js          小程序的应用逻辑
|-------app.json      小程序全局配置 主要包括配置小程序所有页面路径、所有页面的窗口表现、网络超时设置、底部Tab等等
|-------pages          将所有功能页面统一放到一个文件夹便于管理
|        |-------index   单个功能页面文件夹
|        |          |-------index.js    页面交互逻辑
|        |          |-------index.json 当前页面样式配置
|        |          |-------index.wxml 页面的结构
|        |          |-------index.wss    页面的样式
|        | . . .            
|
|——utils


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

app.js 主要内容如下


II、功能页面组成
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

-------------------------------------------------分界线-----------------------------------------------------
III、功能页面数据配置 page.js
Page({
  clickMe: function() {
    this.setData({ msg: "Hello World" })
  }
})

Page: Page(Object) 函数用来注册一个页面。接受一个 Object 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。

1、Page构造函数主要是对单个功能页面的UI层提供数据来源，UI和数据解耦。
2、Page的主要字段解析
   2.1 data: data 是页面第一次渲染使用的初始数据, 页面加载时，data将会以json字符串的形式有逻辑层传至渲染层。主要的传递方式是 渲染层用{{dat}}这样的形式绑定要更新的数据dat,相应的在
       逻辑层的data对象上有 {dat:"Hello world"}这样的属性，一对一映射。
   
   2.2 声明周期函数
   onLoad	Function	生命周期回调—监听页面加载
   onShow	Function	生命周期回调—监听页面显示
   onReady	Function	生命周期回调—监听页面初次渲染完成
   onHide	Function	生命周期回调—监听页面隐藏
   onUnload	Function	生命周期回调—监听页面卸载

   2.3 页面事件处理函数
   onPullDownRefresh() 监听用户下拉刷新事件。
   注:需要在app.json的window选项中或页面配置中开启enablePullDownRefresh。
      可以通过wx.startPullDownRefresh触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
      当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新

  onReachBottom()
  监听用户上拉触底事件。
  注: 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
      在触发距离内滑动期间，本事件只会被触发一次。
  
  onPageScroll(Object) 监听用户滑动页面事件。

  onShareAppMessage(Object)
  监听用户点击页面内转发按钮（<button> 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。
  注：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
  
  Object 参数说明：
  参数	         类型	         说明	                                                                        最低版本
  from	        String	      转发事件来源。
                              button：页面内转发按钮；
                              menu：右上角转发菜单	                                                        1.2.4
  target	     Object	        如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined	1.2.4
  webViewUrl	 String	        页面中包含<web-view>组件时，返回当前<web-view>的url

  onTabItemTap(Object)
  点击 tab 时触发

  Object 参数说明：
    参数	        类型	        说明	                       最低版本
    index	       String	       被点击tabItem的序号，         从0开始	1.9.0
    pagePath	   String	       被点击tabItem的页面路径	     1.9.0
    text	       String	       被点击tabItem的按钮文字	     1.9.0

  2.4 组件事件处理函数
  Page 中还可以定义组件事件处理函数。在渲染层的组件中加入事件绑定，当事件被触发时，就会执行 Page 中定义的事件处理函数。
  <view bindtap="viewTap"> click me </view>
    Page({
      viewTap: function() {
        console.log('view tap')
      }
  })

  2.5 setData(Object data,Fucntion callback)
  setData 函数用于将数据从逻辑层发送到视图层(异步)，同时改变对应的this.data的值(同步) 用于数据更新

  data:要更新的数据 Object以key:value的形式表示，将this.data中的key对应得值改变成value
  callback: setData引起的界面更新渲染完毕后的回调函数

  注: 
  ①直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
  ②仅支持设置可 JSON 化的数据
  ③单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据
  ④请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题

 示例:
<view>{{text}}</view>
<button bindtap="changeText"> Change normal data </button>
<view>{{num}}</view>
<button bindtap="changeNum"> Change normal num </button>
<view>{{array[0].text}}</view>
<button bindtap="changeItemInArray"> Change Array data </button>
<view>{{object.text}}</view>
<button bindtap="changeItemInObject"> Change Object data </button>
<view>{{newField.text}}</view>
<button bindtap="addNewField"> Add new data </button>

//index.js
Page({
  data: {
    text: 'init data',
    num: 0,
    array: [{text: 'init data'}],
    object: {
      text: 'init data'
    }
  },
  changeText: function() {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  changeNum: function() {
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  changeItemInArray: function() {
    // you can use this way to modify a danamic data path
    this.setData({
      'array[0].text':'changed data'
    })
  },
  changeItemInObject: function(){
    this.setData({
      'object.text': 'changed data'
    });
  },
  addNewField: function() {
    this.setData({
      'newField.text': 'new data'
    })
  }
})  


IV、小程序启动

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

V、文件作用域

在JavaScript文件中声明的变量和函数只有在该文件中有效，不同文件中可以声明相同名字的变量和函数，不会相互影响。
通过全局函数getApp() 可以获取全局的应用实例，如果需要全局的数据可以在App()中设置

VI、模块化
可以将一些公共的代码抽离成一个单独的js文件，作为一个模块。模块只有通过module.exports或者exports才能对外暴露接口
注:
  1、exports 是 module.exports 的一个引用，因此在模块里边随意更改 exports 的指向会造成未知的错误。所以更推荐采用 module.exports 来暴露模块接口
  2、小程序目前不支持直接引入 node_modules , 开发者需要使用到 node_modules 时候建议拷贝出相关的代码到小程序的目录中或者使用小程序支持的 npm 功能。

 示例:
 // common.js
  function sayHello(name) {
    console.log(`Hello ${name} !`)
  }
  function sayGoodbye(name) {
    console.log(`Goodbye ${name} !`)
  }

  module.exports.sayHello = sayHello
  exports.sayGoodbye = sayGoodbye
  ​在需要使用这些模块的文件中，使用 require(path) 将公共代码引入

  var common = require('common.js')
  Page({
    helloMINA: function() {
      common.sayHello('MINA')
    },
    goodbyeMINA: function() {
      common.sayGoodbye('MINA')
    }
  })

  VII、API
  小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等

  1、事件监听API
   约定以on开头的API用来监听某个事件是否触发，如wx.onsocketOpen,wx.CompassChange等
  
  2、同步API 
  约定以Sync结尾的API都是同步API，如wx.createWorker,wx.setStorageSync等

  3、异步API
  大多数 API 都是异步 API，如 wx.request，wx.login 等。这类 API 接口通常都接受一个 Object 类型的参数，这个参数都支持按需指定以下字段来接收接口调用结果：
  
  Object 参数说明

  参数名	      类型	      必填	    说明
  success	     function	    否	     接口调用成功的回调函数
  fail	       function	    否	     接口调用失败的回调函数
  complete	   function	    否	     接口调用结束的回调函数（调用成功、失败都会执行）
  其他	       Any	         -	     接口定义的其他参数

  回调函数的参数

    success，fail，complete 函数调用时会传入一个 Object 类型参数，包含以下字段：

    属性	    类型	     说明
    errMsg	  string	  错误信息，如果调用成功返回 ${apiName}:ok
    errCode	  number	  错误码，仅部分 API 支持，具体含义请参考对应 API 文档，成功时为 0。
    其他	     Any	    接口返回的其他数据

    异步 API 的执行结果需要通过 Object 类型的参数中传入的对应回调函数获取。部分异步 API 也会有返回值，可以用来实现更丰富的功能，如 wx.request，wx.connectSockets 等。


    示例:
   wx.login({
     success(res){
       console.log(res);
     },
     fail(res){
       console.log(res);
     },
     complete(){
       console.log('complete');
     }
   });

   -----------------------------------------------分界线-------------------------------------------

   VIII、视图层
   1、 WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。

   *数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于

   1.1 数据绑定
   WXML 中的动态数据均来自对应 Page 的 data
   1.1.1 内容
   <view>{{text}}</view>
   Page({
      data:{
        text:"hello world";
      }
   });

   1.1.2 组件属性(需要在双引号之内)
  <view id="item-{{id}}"> </view>
  Page({
    data: {
      id: 0
    }
  })

  1.1.3 控制属性(需要在双引号之内)
  <view wx:if="{{condition}}"> </view>
  Page({
    data: {
      condition: true
    }
  })

  1.1.4 关键字(需要在双引号之内)
  true：boolean 类型的 true，代表真值。
  false： boolean 类型的 false，代表假值。
  <checkbox checked="{{false}}"> </checkbox>



   1.2 列表渲染
   wx:for 在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。 wx:for后面是数组
   默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item
   <view wx:for="{{array}}">{{item}}</view>

  Page({
    data:{
      array:[1,2,3,4,5];
    }
  });
  
  1.3 条件渲染

  1.4 模板
  1.5 事件

     -----------------------------------------------分界线-------------------------------------------

     IX、组件
     1、容器组件
      1.1 view 类似于div是一个容器组件，主要是放基础控件或作为嵌套
      
     2、基础组件
     3、表单组件
     4、导航
     5、媒体组件
     6、地图
     7、画布
     8、开放能力
