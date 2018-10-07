//Page Object
Page({
  data: {
    lodd:false
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
  click_show:function (params) {
    console.log('click');
    wx.showToast({
      title: '你好',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  click_hide:function (params) {
    wx.hideToast();
  }
});