//Page Object

var requestUrl = require("../config.js").requestUrl;
Page({
  data: {
   response:'请求内容'
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
  request:function (e) {
    var self = this;
    wx.request({
      url: requestUrl,
      data:{
        x:'0',
        y:'0'
      },
      header:{'content-type':'application/json'},
      method:'GET',
      success:function (res) {
        console.log(res.data.text);
       self.setData({response:res.data.text});
      },
      fail:function (err) {
       // console.log(err);
      },
      complete:function (res) {
       // console.log(res);
      }
    });
  },
});