//Page Object
Page({
  data: {
    
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    this.drawBigBall();
    var that = this;
    this.position = {
      x:151,
      y:151,
      vx:0,
      vy:0,
      ax:0,
      ay:0
    };

    wx.onAccelerometerChange((result) => {
      that.setData({
        x:result.x.toFixed(2),
        y:result.y.toFixed(2),
        z:result.z.toFixed(2)
      });
    });
    that.position.ax = Math.sin(result.x * Math.PI /2);
    that.position.ay = -Math.sin(result.y * Math.PI / 2);
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

  }
});