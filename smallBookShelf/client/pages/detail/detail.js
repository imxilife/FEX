//Page Object

const api = require('../../config/config.js');
const app = getApp();

Page({

  //页面初始化
  data: {
    bookInfo:{},          //书籍信息
    downloading:false,    //是否显示书籍下载中
    bookIsBuy: -1,        //是否有购买
    commentLoading: true, //评论加载
    commentList: [],    //评论列表
    downloadPercent: 0  //书籍下载的百分比
  },
  

  //  页面初始化回调函数
  onLoad: function(options){
    let _bookInfo = {};
    let that = this;
    for (let key in options) {
      _bookInfo[key] = decodeURIComponent(options[key]);
    }
    that.setData({
      bookInfo:_bookInfo
    });
    console.log('书籍信息:',that.data.bookInfo);
    that.getPageData();
  },


  // 获取书籍评论列表及是否购买
  getPageData:function () {
    let that  = this;
    let requestData = {
      bookid:that.data.bookInfo.id,
      skey:app.getLoginFlag()
    };

    wx.request({
      url: api.queryBookUrl,
      data: requestData,
      method: 'GET',
      success: (res)=>{
        console.log(res);
        res = res.data;
        if(res.result === 0){
            that.setData({commentList:res.data.list || [],
              bookIsBuy:res.data.is_buy
            });

            setTimeout(() => {
              that.setData({commentLoading:false});
            }, 500);

          }else{
            that.showInfo('返回数据异常');
          }  
      },
      fail: (error)=>{
        console.log(error);
      },
    });
  },


  //显示信息
  showInfo:function (message,icon='none') {
    wx.showToast({
      title: message,
      icon: icon,
      duration:1500,
      mask: true,
    });
    this.setData({
      commentLoading:false
    });
  },


  //兑换书籍 
  buyBook:function () {
    let that = this;
    let bookId = that.data.bookInfo.id;
    let requestData = {
      bookid:bookId,
      skey:app.getLoginFlag(),
    };
    
    wx.request({
      url: api.buyBookUrl,
      data: requestData,
      method: 'POST',
      success: (res)=>{
        //将按钮置为'打开'
        //更新用户兑换币的值
        console.log(res);
        if(res.data.result === 0){
          that.setData({
            bookIsBuy:1
          });
          let balance = app.globalData.userInfo.balance;
          app.globalData.userInfo.balance = balance - 1;
          wx.setStorageSync('userInfo', JSON.stringify(app.globalData.userInfo));
          that.showInfo('购买成功','success');
        }else{
          that.showInfo('返回数据异常');
        }
      },
      fail: (error)=>{
        console.log(error);
        console.log('请求失败');
      },
    });
  },


  //打开书籍
  readBook:function () {
    let that = this;
    let fileUrl = that.data.bookInfo.file;
    let key = 'book_' + that.data.bookInfo.id;
    //书籍是否下载过
    let downloadPath = app.getDownloadPath(key);
    if(downloadPath){
      app.openBook(fileUrl);
      return;
    }
    const downloadTask = wx.downloadFile({
      url: fileUrl,
      success: (res)=>{
        let filePath = res.tempFilePath;
        that.setData({
          downloading:false
        });
        app.saveDownloadPath(key,filePath)
        .then(function (saveFilePath) {
          app.openBook(saveFilePath);
        })
        .catch(function () {
          app.showInfo('文档保存失败');
        });
      },
      fail: (error)=>{
        console.log(error);
        that.showInfo('文档下载失败');
      },
    });

    downloadTask.onProgressUpdate(function (res) {
      that.setData({
        downloading:true,
        downloadPercent:res.progress
      });
    });
  },


  //确认购买
  confirmBuyBook:function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认用1积分兑换此书籍吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#8a8a8a',
      confirmText: '确定',
      confirmColor: '#1AAD19',
      success: (result) => {
        if(result.confirm){
          //兑换
          that.buyBook();
        }else if (res.cancel) {
          console.log('取消');
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  //去评论
  goComment:function (ev) {
  
    let info = ev.currentTarget.dataset;
    let navigateUrl = '../comment/comment?';
    for(let key in info){
      info[key] = encodeURIComponent(info[key]);
      console.log('key:'+key+"|"+"info[key]:"+info[key]);
      navigateUrl += key + '=' + info[key] + '&';
    }

    navigateUrl = navigateUrl.substring(0,navigateUrl.length - 1);

    console.log('navigateUrl:',navigateUrl);
    
    wx.navigateTo({
      url: navigateUrl,
    });
  },


  //从上级页面返回时，重新拉取评论列表
  backRefreshPage:function (params) {
    let that = this;
    that.setData({
      commentLoading:true
    });
    that.getPageData();
  },


  //页面最终显示回调效果
  onShow: function(){
    if(wx.getStorageInfoSync('isFromBack')){
      wx.removeStorageSync('isFromBack');
      this.backRefreshPage();
    }
  },


});