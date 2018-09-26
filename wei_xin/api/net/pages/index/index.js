//Page Object


/* 小程序的网络请求包括 https请求、上传文件、下载文件、Websocket通信 */

//\Code\ Javascript_example\ front - end_example\ wei_xin\ config.js

//E: \Code\ Javascript_example\ front - end_example\ wei_xin\ api\ net\ pages\ index\ index.js

const downloadFileUrl = require("../config.js").downloadFileUrl;

Page({
  data: {
    
  },
  //options(Object)
  onLoad: function(options){
  
  },
  onReady: function(){
    wx.downloadFile({
      url: 'http://',
      success: (result)=>{
        console.log(result);
      },
      fail: (e)=>{
        console.log(e);
      },
      complete: ()=>{
        console.log('下载完成');
      }
    });
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  },
  downloadImage:function () {

    var self = this;
    
    var downloadTask = wx.downloadFile({
        url:downloadFileUrl,
        success:function (req) {
          console.log(req);
          self.setData({imageSrc:req.tempFilePath});
        },
        fail:function (error) {
          console.log(error);
        }
    });

    downloadTask.onProgressUpdate((result)=>{
        console.log('下载进度',result.progress);
        console.log('已下载长度', result.totalBytesWritten);
        console.log('预下载长度', result.totalBytesExpectedToWrite);
      });
  }
});