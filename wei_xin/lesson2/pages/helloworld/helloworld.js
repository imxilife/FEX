
/* 用来注册一个页面 */
Page({

data: { /* 页面第一次渲染使用的初始数据,可以通过WXML中{{}}定义的内容和data的属性内容进行映射 */
    text:"hello weichat"
},

onLoad: function (params) { /* 生命周期回调—监听页面加载 */
    console.log(params);
},

onReady: function () {
        // Do something when page ready.
    },
    onShow: function () {
        // Do something when page show.
    },
    onHide: function () {
        // Do something when page hide.
    },
    onUnload: function () {
        // Do something when page close.
    },
    onPullDownRefresh: function () {
        // Do something when pull down.
    },
    onReachBottom: function () {
        // Do something when page reach bottom.
    },
    onShareAppMessage: function () {
        // return custom share data when user share.
    },

     onTabItemTap(item) {
         console.log(item.index)
         console.log(item.pagePath)
         console.log(item.text)
     },

viewTap: function () {
        this.setData({
            text: 'Set some data for updating view.'
        }, function () {
            // this is setData callback
        })
    },
    customData: {
        hi: 'MINA'
    }

});