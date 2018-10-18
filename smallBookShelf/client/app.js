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
                   // that.doLogin(); //session_key过期 重新登录
                },
            });
        } else {
            that.showInfo('登录已失效,需要重新登录');
            console.log('登录态标识无效 Go Login');
            //that.doLogin(); //无登录态
        }
    },


    /* 登录 
    
        登录 获取code =》获取用户信息=>code 2 sessionkey&openid
    */
    doLogin: function (callback = () => {}) { //这里的参数是定义了一个箭头函数并赋值给了callback
        let that = this;
        wx.showLoading({
            title: '登录',
            mask: true,
        });
        wx.login({
            timeout: 10000,
            success: (loginRes) => {
                if (loginRes.code) {
                    /* 
                     * @desc: 获取用户信息 期望数据如下 
                     *
                     * @param: userInfo       [Object]
                     * @param: rawData        [String]
                     * @param: signature      [String]
                     * @param: encryptedData  [String]
                     * @param: iv             [String]
                     **/
                    console.log('登录成功,获取用户信息=>' + JSON.stringify(loginRes));
                    wx.getUserInfo({
                        withCredentials: true,
                        lang: 'zh_CN',
                        timeout: 10000,
                        success: (infoRes) => {
                            wx.request({
                                url: api.loginUrl,
                                data: {
                                    code: loginRes.code, //临时登录凭证
                                    rawData: infoRes.rawData, //用户非敏感信息
                                    signature: infoRes.signature, //签名
                                    encryptedData: infoRes.encryptedData, //用户敏感信息
                                    iv: infoRes.iv //解密算法的向量
                                },
                                success: (res) => {
                                    that.showInfo('登录成功');
                                    res = res.data;
                                    if (res.result === 0) {
                                        that.globalData.userInfo = res.userInfo;
                                        wx.setStorageSync('userInfo', JSON.stringify(res.userInfo));
                                        wx.setStorageSync('loginFlag', res.skey);
                                        callback();
                                    }
                                },
                                fail: (error) => {
                                    that.showInfo('调用服务端登录接口失败');
                                    console.log('111111111111');
                                },
                            });
                        },
                        fail: () => {
                            that.showInfo('获取用户信息失败,需要检查用户是否已授权');
                            wx.hideLoading();
                            that.checkUserInfoPermission();
                        },
                    });
                } else {
                    console.log('33333333333333');
                    that.showInfo('登录失败');
                    console.log('调用wx.login获取code失败');
                }
            },
            fail: (error) => {
                that.showInfo('接口调用失败');
                console.log(error);
            },
        });
    },


    /* 
        检查授权用户信息设置
    */
    checkUserInfoPermission: function () {
        wx.getSetting({
            success: (res) => {
                if (!res.authSetting['scope.userInfo']) {
                    wx.openSetting({
                        success: (authSetting) => {
                            console.log(authSetting);
                        },
                        fail: () => {
                            console.log('没有授权用户信息');
                        },
                    });
                }
            },
            fail: (error) => {
                console.log(error);
            },
        });
    },


    /* 
    获取用户登录标识 供全局调用
    */
    getLoginFlag: function () {
        return wx.getStorageSync('loginFlag');
    },

    /* 
    封装wx.showToast方法
    */
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

    /**
     * 应用进入前台
     */
    onShow: function (options) {
        console.log('App is onShow');
    },

    /* 
    应用进入后台
    */
    onHide: function () {
        console.log('onHide');
    },

    /* 
    应用启动异常
    */
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