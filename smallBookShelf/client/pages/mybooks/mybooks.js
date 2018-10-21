//Page Object

const api = require('../../config/config.js');
const app =  getApp();


Page({
  data: {
    bookList:[],
    showLoading:true,
    showDownloading:false,
    downloadPercent:0
  },
  //options(Object)
  onLoad: function(options){
    let that =this;
    setTimeout(() => {
        that.setData({
            showLoading:false
        });
    }, 800);
    that.getMyBooks();
  },

  getMyBooks:function () {
    let that = this;
    let flag = app.getLoginFlag();
    wx.request({
        url: api.getBoughtBookUrl,
        data: {
            skey: flag
        },
        method: 'GET',
        success: (res) => {
                let data = res.data;
                if(data.result === 0){
                that.setData({
                    bookList: data.list || [],
                });
            }
        },
        fail: (error) => {
            console.log(error);
        },
    });
  },

  onShow: function(){
    console.log('onShow...');
  },

  readBook:function (ev) {
      let that = this;
      let data = ev.currentTarget.dataset;  //获取点击书籍book信息
      //先判断书籍是否有下载，如果没有下载先去下载 再打开 否则直接打开
      let key = 'book_'+data.id;
      let fileUrl = data.file;
      let downloadPath = app.getDownloadPath(key);
      if (!downloadPath) {
          var downTask = wx.downloadFile({
              url: fileUrl,
              success: (res)=>{
                  let tmpFilePath = res.tempFilePath;
                  that.setData({
                    showLoading:false,
                  });
                  app.saveDownloadPath(key, tmpFilePath)
                  .then(function (saveFilePath) {
                      app.openBook(saveFilePath);
                  }).catch(function () {
                      app.showInfo('文件保存失败');
                  });
              },
              fail: ()=>{
                  app.showInfo('文档下载失败');
                  that.setData({
                    showDownloading:false
                  });
              },
          });
          downTask: onProgressUpdate((res) =>{
            that.setData({
                showDownloading:true,
                downloadPercent: res.progress
            });
          });
      }else{
          openBook(downloadPath);
      }
  },

  openBook:function (filePath) {
      app.openBook(filePath);
  }
});