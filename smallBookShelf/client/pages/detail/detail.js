//Page Object

var api = ('../../config/config.js');
var app = getApp();

Page({

  //页面初始化
  data: {
    bookInfo:{},
    downloading:false,
    bookIsBuy:-1,  //是否有购买
    commentLoading:true,
    commentList: [],
    downloadPercent:0
  },
  

  /* 
    页面初始化回调函数
  */
  onLoad: function(options){
    let _bookInfo = {};
    let that = this;
    for(let key in ontions){
      _bookInfo[key] = decodeURIComponent(options[key]);
    }

    that.setData({
      bookInfo:_bookInfo
    });

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
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        if(res.data.result === 0){
            that.setData({commentList:res.data.data.list || [],
              bookIsBuy:res.data.data.is_buy
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

  showInfo:function (message,icon='none') {
    wx.showToast({
      title: message,
      icon: icon,
      duration:1500,
      mask: true,
    });
  },


  //兑换书籍 
  buyBook:function () {
    let that = this;
    let bookId = that.data.bookInfo.id;
    that.requestData = {
      bookid:bookId,
      skey:app.getLoginFlag,
    };
    
    wx.request({
      url: api.buyBookUrl,
      data: requestData,
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        //将按钮置为'打开'
        //更新用户兑换币的值
        if(res.data.result === 0){
          that.setData({bookIsBuy:1});
          let balance = app.globalData.userInfo.balance;
          app.globalData.userInfo.balance = balance - 1;
          wx.setStorageSync('userInfo', JSON.stringify(app.globalData.userInfo));
          that.showInfo('购买成功','success');
        }else{
          console.log(res);
          that.showInfo('返回数据异常');
        }
      },
      fail: (error)=>{
        console.log(error);
        console.log('请求失败');
      },
    });
  },

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

  goComment:function (ev) {
  
    let info = ev.currentTarget.dataset;
    let navigateUrl = '../comment/comment?';
    for(let key in info){
      info[key] = encodeURIComponent(info[key]);
      navigateUrl += key + '=' + info[key] + '&';
    }

    navigateUrl = navigateUrl.substring(0,navigateUrl.lenght-1);
    
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

  /* 
    页面最终显示回调效果
  */
  onShow: function(){
    if(wx.getStorageInfoSync('isFromBack')){
      wx.removeStorageSync('isFromBack');
      this.backRefreshPage();
    }
  },


});