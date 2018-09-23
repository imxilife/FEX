//Page Object
Page({
  data: {
    animation:true,
    x:30,
    y:30,
    scale_value:1
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

  bindchange:function (e) {
    console.log(e);
  },

  scale:function (e) {
    console.log(e);
  },

  click:function (e) {
    console.log(e);
    this.x = 30;
    this.y = 30;
    this.setData({x:30});
    this.setData({y:30});
  },

    click2: function (e) {
    console.log(e);
    this.setData({scale_value:2});
  }

});