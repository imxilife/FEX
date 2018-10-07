//Page Object

var sourceType = [
  ['camera'],
  ['alubm'],
  ['camera', 'album']
];
var sizeType = [
  ['compress'],
  ['original'],
  ['compress', 'original']
];



Page({
  data: {
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],

    sizeTypeIndex: 2,
    sizeType: ['压缩', '原图', '压缩或原图'],

    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  //options(Object)
  onLoad: function (options) {

  },
  onReady: function () {},

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

  sourceTypeChange: function (e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    });
  },
  sizeTypeChange: function (e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    });
  },
  countChange: function (e) {
    this.setData({
      countIndex: e.detail.value
    });
  },
  chooseImage: function (params) {
    var that = this;
    console.log("this is -1" + that.imageList);
    wx.chooseImage({
      count: this.data.count[this.data.countIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      sourceType: sourceType[this.data.sourceTypeIndex],
      success: (res) => {
        console.log('this is ' + this);
        if (res.tempFilePaths.lenght) {
          res.tempFilePaths.forEach(element => {
            wx.getImageInfo({
              src: element,
              success: (result) => {
                wx.saveImageToPhotosAlbum({
                  filePath: element,
                  success: (result) => {

                  },
                  fail: () => {},
                  complete: () => {}
                });
              },
              fail: () => {},
              complete: () => {}
            });
          });
        }
        that.setData({
          imageList: res.tempFilePaths
        });
      },
      fail: () => {

      },
      complete: () => {
        console.log('this is -2 ' + this.imageList);
      }
    });
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imageList,
      success: (res) => {
        console.log('res' + res);
      },
      fail: () => {
        console.log('fail');
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

});