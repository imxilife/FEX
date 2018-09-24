//Page Object
Page({
  data: {
    array: [{
        name: 'USA',
        value: '美国'
      },
      {
        name: 'JPN',
        value: '日本'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: true
      },
      {
        name: 'ENG',
        value: '英国'
      },
      {
        name: 'RUS',
        value: '俄罗斯'
      }
    ],
    disable: false,
    focus:true,
    adjust_position:true
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
  radiochanged: function (e) {
    console.log(e);
  },
  changing: function (e) {
    console.log(e);
  },
  changed: function (e) {
    console.log(e);
  },
  switch_changed:function (e) {
    console.log(e.detail.value);
  }
});