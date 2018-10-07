//Page Object
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

  /* 保留当前页 跳转新页面 */
  navigateTo:function (params) {
    wx.navigateTo({
      url: './index',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{
         console.log('打开页面后当前页面栈', getCurrentPages());
      }
    });
    setTimeout(() => {
      console.log('打开页面后当前页面栈123', getCurrentPages());
    }, 1000);
  },

  /* 返回 */
  navigateBack:function (params) {
    wx.navigateBack({
      delta: 1
    });
    setTimeout(() => {
      console.log('返回后当前页面栈', getCurrentPages());
    }, 1000);
  },

  /* 销毁当前页 跳转新页面 */
  redirectTo:function (params) {
    wx.redirectTo({
      url: './index',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
    setTimeout(() => {
      console.log('返回后当前页面栈456', getCurrentPages());
    }, 1000);
  }


});