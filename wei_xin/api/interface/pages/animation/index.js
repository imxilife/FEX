//Page Object
Page({
  data: {
    
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    this.animation = wx.createAnimation({});
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

  rotate:function (params) {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setData({
      animation: this.animation.exprot
    });
  },
  scale:function (params) {
    animation.scale(1,1);
  },
  translate:function (params) {
    animation.translate(2,1);
  },
  skew:function (params) {
    animation.skew(40,30);
  },
  rotateAndScale:function (params) {
    
  },
  rotateThenScale:function (params) {
    
  },
  all:function (params) {
    
  },
  allInQueue:function (params) {
    
  },
  reset:function (params) {
    
  }
});