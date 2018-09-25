//Page Object


/* 小程序的网络请求包括 https请求、上传文件、下载文件、Websocket通信 */


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
});