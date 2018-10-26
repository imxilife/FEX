//Page Object


var api = require('../../config/config.js');
var app = getApp();


Page({
    data: {
        hasLogin: false,
        userInfo: {} //用户信息
    },


    //生命周期 界面启动回调函数
    onLoad: function (options) {
        console.log('my page onLoad');
        this.checkLoginStatus();
    },

    //检查登录状态
    checkLoginStatus: function () {
        let that = this;
        let loginFlag = app.getLoginFlag();
        console.log('my page loginFlag:' + loginFlag);
        if (loginFlag) {
            //检查session是否过期
            wx.checkSession({
                success: (res) => {
                    console.log(res);
                    that.getUserInfo();
                },
                fail: (error) => {
                    console.log('session过期需要重新登录',error);
                    that.showNoLogin(that);
                },
            });
        } else {
            console.log('没有登录态标识，需要重新登录');
            // that.showNoLogin(that);
        }
    },

    //显示未登录
    showNoLogin(context) {
        context.setData({
            hasLogin: true
        });
    },


    //获取用户信息显示
    getUserInfo: function () {
        let that = this;
        let userInfo = app.globalData.userInfo;
        if (userInfo) {
            console.log('更新数据',userInfo);
            that.setData({
                hasLogin: true,
                userInfo: userInfo
            });
        } else {
            console.log('本地没有存储userInfo信息');
        }
    },

    //生命周期 界面显示回调函数
    onshow: function (params) {},


    //登录
    doLogin: function () {
        let that = this;
        wx.login({ //调用登录接口获取code
            timeout: 10000,
            success: (loginRes) => {
                if (loginRes.code) {
                    wx.showModal({
                        title: '获取用户授权信息',
                        content: '获取您的头像和昵称',
                        showCancel: true,
                        cancelText: '取消',
                        cancelColor: '#000000',
                        confirmText: '确定',
                        confirmColor: '#3CC51F',
                        success: (result) => {
                            if (result.confirm) {

                                /* 
                                 * @desc: 获取用户信息 期望数据如下 
                                 *
                                 * @param: userInfo       [Object]
                                 * @param: rawData        [String]
                                 * @param: signature      [String]
                                 * @param: encryptedData  [String]
                                 * @param: iv             [String]
                                 **/
                                wx.getUserInfo({ //授权用户信息
                                    withCredentials: 'true',
                                    lang: 'zh_CN',
                                    timeout: 10000,
                                    success: (infoRes) => {
                                        console.log('用户信息', infoRes, loginRes);
                                        wx.showLoading({
                                            title: '正在登录中...',
                                            mask: true,
                                        });
                                        wx.request({ //后台登录认证返回登录态信息
                                            url: api.loginUrl,
                                            data: {
                                                code: loginRes.code, //临时登录凭证
                                                rawData: infoRes.rawData, //用户非敏感信息
                                                signature: infoRes.signature, //签名
                                                encryptedData: infoRes.encryptedData, //用户敏感信息
                                                iv: infoRes.iv //解密算法的向量
                                            },
                                            success: (res) => {
                                                res = res.data;
                                                if (res.result === 0) {
                                                    app.globalData.userInfo = res.userInfo;
                                                    wx.setStorageSync('loginFlag', res.skey);
                                                    wx.setStorageSync('userInfo', JSON.stringify(res.userInfo));
                                                    //登录成功后的回调
                                                    that.getUserInfo();
                                                }
                                            },
                                            fail: (error) => {
                                                console.log('登录鉴权失败',error);
                                            },
                                        });
                                    },
                                    fail: () => {
                                        console.log('授权信息获取失败');
                                    },
                                    complete: () => {
                                        wx.hideLoading();
                                    }
                                });
                            }
                        },
                        fail: () => {
                            console.log('用户取消授权');
                        },
                    });
                }
            },
            fail: () => {
                console.log('登录接口调用失败',error);
            },
        });
    },

    goMyBooks: function () {
        wx.navigateTo({
            url: '../mybooks/mybooks',
        });
    },

});