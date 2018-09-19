

/* App() 函数用来注册一个小程序。接受一个 Object 参数，其指定小程序的生命周期回调等 */
App({

    onLaunch: function (options) { /* 小程序初始化完成时（全局只触发一次） */
        console.log('onlauncher ' + this.scene);
},

onShow: function (options) {
    console.log('onshow');
},

onHide:function (options) {
    console.log('onHide');
},

onError:function (options) {
    console.log('onError');
},

onPageNotFound:function (params) {
    console.log('onPageNotFound');
}

});