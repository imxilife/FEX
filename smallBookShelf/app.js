//app.js
App({
    //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
    /**
     * 应用启动
     */
    onLaunch: function(options){
        console.log('onLauncher');
        checkLoginState();
    },

    /* 检查登录态标识是否存在 */
    checkLoginState:function (params) {
        let that = this;
        let storageInfo = wx.getStorageInfoSync('loginFlag'); //检查登录态标识
        if(storageInfo){
            that.checkSessionExpire();
        }else{
            that.doLogin();
        }
    },

    /* 检查session key是否有效 */
    checkSessionExpire:function (params) {
        wx.checkSession({
            success: (result)=>{
                
            },
            fail: ()=>{

            },
            complete: ()=>{

            }
        });
    },

    /* 登录 */
    doLogin:function (params) {
        wx.login({
            timeout:10000,
            success: (result)=>{
                // 存储登录态标识 以及做任务请求
                wx.setStorageSync(key, data);
            },
            fail: ()=>{

            },
            complete: ()=>{

            }
        });  
    },

    /**
     * 应用进入前台
     */
    onShow: function(options){
        console.log('onShow');
    },

    /* 
    应用进入后台
    */
    onHide: function(){
        console.log('onHide');
    },

    /* 
    应用启动异常
    */
    onError: function(msg){
        console.log('onError');
    },
    //options(path,query,isEntryPage)
    onPageNotFound: function(options){

    },
    globalData: {
        userInfo:null
    }
});