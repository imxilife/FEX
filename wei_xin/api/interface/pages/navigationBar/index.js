//Page Object
Page({
  data: {

  },
  //options(Object)
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  },

  showNavigationBarLoading: function (params) {
      wx.showNavigationBarLoading();
  },
  hideNavigationBarLoading: function (params) {
    wx.hideNavigationBarLoading();
  },
  setNavigationBarTitle: function (params) {
    wx.setNavigationBarTitle({
      title: '导航菜单栏设置',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  /* frontColor 仅支持#ffffff 和 #000000 设置 */
  setNavigationBarColor: function (params) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#f28500',
      animation: {
        duration: 500,
        timingFunc: 'linear'
      },
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }

});