//app.js

const api = require('./config/config.js');


App({
    //onLaunch,onShow: options(path,query,scene,shareTicket,referrerInfo(appId,extraData))
    /**
     * 应用启动
     */
    onLaunch: function (options) {
        console.log('App is onLauncher');
        let that = this;
        that.checkLoginState();
    },

    /* 检查登录态标识是否存在 */
    checkLoginState: function () {
        let that = this;
        let loginFlag = wx.getStorageSync('loginFlag'); //检查登录态标识
        if (loginFlag) {
            console.log('登录态标识有效，go checkSession');
            wx.checkSession({
                success: (res) => {
                    //do request 
                    let userStorageInfo = wx.getStorageSync('userInfo');
                    if (userStorageInfo) {
                        that.globalData.userInfo = JSON.parse(userStorageInfo);
                    } else {
                        that.showInfo('缓存信息缺失');
                        console.log('登录成功后将用户信息存在Stroage的userStorageInfo字段,该字段丢失');
                    }
                },
                fail: () => {
                    that.showInfo('登录已失效,需要重新登录');
                    console.log('session check fail');
                },
            });
        } else {
            that.showInfo('登录已失效,需要重新登录');
            console.log('登录态标识无效 Go Login');
        }
    },

    //获取用户登录标识 供全局调用
    getLoginFlag: function () {
        return wx.getStorageSync('loginFlag');
    },

    //封装wx.showToast方法
    showInfo: function (info = 'error', icon = 'none') {
        console.log('here');
        wx.showToast({
            title: info,
            icon: icon,
            duration: 3000,
            mask: true,
        });
    },

    //获取书籍已下载地址
    getDownloadPath: function (key) {
        return wx.getStorageSync(key);
    },

    //将下载文件保存到本地
    saveDownloadPath: function (key, filePath) {
        return new Promise((resolve, reject) => {
            wx.wx.saveFile({
                tempFilePath: filePath,
                success: (res) => {
                    let savedFilePath = res.saveFilePath;
                    //保存到Storage中标记 下次不再下载
                    wx.setStorageSync(key, savedFilePath);
                    resolve(savedFilePath);
                },
                fail: () => {
                    reject(false);
                },
            });
        });
    },

    //打开文档
    openBook: function (filePath) {
        let that = this;
        wx.openDocument({
            filePath: filePath,
            success: (res) => {
                console.log('打开文档成功');
            },
            fail: (error) => {
                console.log(error);
            },
        });
    },

    //应用进入前台
    onShow: function (options) {
        console.log('App is onShow');
    },

    //应用进入后台
    onHide: function () {
        console.log('onHide');
    },

    //应用启动异常
    onError: function (msg) {
        console.log(msg);
    },

    //options(path,query,isEntryPage)
    onPageNotFound: function (options) {

    },

    globalData: {
        userInfo: null
    }
});