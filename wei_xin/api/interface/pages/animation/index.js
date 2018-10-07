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

    this.animation.rotate(Math.random()* 720-360).step();
    this.setData({animation:this.animation.export()});
  },
  scale:function (params) {
    this.animation.scale(Math.random()*2).step();
    this.setData({ animation: this.animation.export()});
  },
  translate:function (params) {
    this.animation.translate(Math.random() * 100-50,Math.random()*100-50).step();
    this.setData({ animation: this.animation.export() });
  },
  skew:function (params) {
    this.animation.skew(Math.random()*90,Math.random()*90).step();
    this.setData({ animation: this.animation.export() });
  },
  rotateAndScale:function (params) {
    this.animation.rotate(Math.random()*720-360)
      .scale(Math.random()*2)
      .step();
      this.setData({animation:this.animation.export()});
  },
  rotateThenScale:function (params) {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  all:function (params) {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step();
      this.setData({
      animation: this.animation.export()
    });
  },
  allInQueue:function (params) {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step();
    this.setData({
      animation: this.animation.export()
    });
  },
  reset:function (params) {
    this.animation.rotate(0,0)
      .scale(1)
      .translate(0,0)
      .skew(0,0)
      .step({duration:0});
    this.setData({
      animation: this.animation.export()
    });
  }
});