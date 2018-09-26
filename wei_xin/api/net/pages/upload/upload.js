//Page Object

var uploadFileUrl = require("../config.js").uploadFileUrl;
Page({
  data: {
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    
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
  chooseImage: function (res) {
      console.log('chooseImage');
      var self = this;
      wx.chooseImage({
          count: 1,
          sizeType: ['original','compressed'],
          sourceType: ['album','camera'],
          success: (result)=>{
              console.log(result);
              var imageSrc = result.tempFilePaths[0];
              var uploadTask = wx.uploadFile({
                  url: uploadFileUrl,
                  filePath: imageSrc ,
                  name: 'data' ,
                  formData: {
                      'x':'0',
                      'y':'0'
                  },
                  success: (result)=>{
                      console.log(result);
                      wx.showToast({
                          title: '上传成功',
                          icon: 'success',
                          duration: 1500,
                          mask: false,
                      });
                      self.setData({imageSrc});
                  },
                  fail: ()=>{
                      console.log('error');
                  },
                  complete: ()=>{
                      console.log('complete');
                  }
              });
              uploadTask.onProgressUpdate((res)=>{
                console.log('上传进度'+res.progress);
                console.log('已经上传长度' + res.totalBytesSent);
                console.log('预上传长度' + res.totalBytesExpectedToSend);
              });
          },
          fail: ()=>{
              console.log('error');
          },
          complete: ()=>{
              console.log('complete');
          }
      });
  }
});