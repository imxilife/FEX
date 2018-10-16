//Page Object


var api = require('../../config/config.js');
var app = getApp();


Page({
    data: {
        hasLogin: wx.getStorageInfoSync('loginFlag') ? true : false,
        userInfo: {} //用户信息
    },
    //options(Object)
    onLoad: function (options) {
        this.checkLoginStatus();
    },

    doLogin: function () {
        let that = this;
        wx.showLoading({
            title: '登录中...',
            mask: true,
        });
        app.doLogin(that.getUserInfo());
    },

    goMyBooks: function () {
        wx.navigateTo({
            url: '../myBooks/myBooks',
        });
    },

    onshow: function (params) {
        let that = this;
        that.setData({
            userInfo: app.globalData.userInfo
        });
    },

    //检查登录状态
    checkLoginStatus: function () {
        let that = this;
        let loginFlag = wx.getStorageInfoSync('loginFlag');
        if (loginFlag) {
            //检查session是否过期
            wx.checkSession({
                success: (res) => {
                    console.log(res);
                    that.getUserInfo();
                },
                fail: (error) => {
                    console.log(error);
                    that.setData({
                        hasLogin: false
                    });
                },
            });
        } else {
            that.setData({
                hasLogin: false
            });
        }
    },


    getUserInfo: function () {
        let that = this;
        let userInfo = app.globalData.userInfo;
        if (userInfo) {
            that.setData({
                hasLogin: true,
                userInfo: userInfo
            });
            wx.hideLoading();
        } else {
            console.log("获取用户信息失败");
        }
    }
});