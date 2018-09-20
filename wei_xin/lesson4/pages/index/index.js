//Page Object
Page({
  data: {
    stop: false,
    value: true,
    enable_animation: true
  },
  upper: function () {
    console.log("upper");
  },
  lower: function (params) {
    console.log('lower');
  },
  scroll: function (params) {
    console.log(params);
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

  clickMe: function () {
    console.log('click');
  }

});