//Page Object

var api = require('../../config/config.js');

var app = getApp();


Page({
  data: {
    bookInfo: {},
    comment: '',
  },


  //页面初始化
  onLoad: function (options) {
    let that = this;
    let _bookInfo = {};
    for (let key in options) {
      _bookInfo[key] = decodeURIComponent(options[key]);
    }
    console.log(_bookInfo);
    that.setData({
      bookInfo:_bookInfo
    });
  },

  /**
   *  封装 wx.showToast
   */
  showInfo: function (info, icon = 'none', callback = () => {}) {
    wx.showToast({
      title: info,
      icon: icon,
      duration: 1500,
      mask: true,
      success: callback
    });
  },

  onReady: function () {

  },
  onShow: function () {

  },

  inputComment: function (ev) {
    let cmt = ev.detail.value;
    let that = this;
    that.setData({
      comment: cmt
    });
  },

  checkUserInput: function (params) {

    let that = this;
    let comment = that.data.comment;
    let showToastFlag = false;
    let toastWording = '';

    if (that.checkEmpty(comment)) {
      showToastFlag = true;
      toastWording = '输入不能为空';
    } else if (that.checkIllegal(comment)) {
      showToastFlag = true;
      toastWording = '含有非法字符';
    } else if (comment.length > 140) {
      showToastFlag = true;
      toastWording = '长度超出限制';
    }

    if (showToastFlag) {
      that.showInfo(toastWoring);
      return false;
    } else {
      return true;
    }

  },

  checkEmpty: function (comment) {
    return comment === '';
  },

  checkIllegal: function (input) {
    let patern = /[`#^<>:"?{}\/;'[\]]/im;
    let _result = patern.test(input);
    return _result;
  },


  submitComment: function (ev) {

    let that = this;

    let formId = ev.detail.formId;

    if (that.checkUserInput) {
      console.log('submit');
      let requestData = {
        skey: app.getLoginFlag(),
        content: that.data.comment,
        bookid:that.data.bookInfo.id,
        formId:formId
      };
      wx.request({
        url: api.commentUrl,
        data: requestData,
        method: 'POST',
        success: (res) => {
            if(res.data.result ===0){
              that.showInfo('评论成功','success',function (params) {
                wx.setStorageSync('isFromBack','1');
                setTimeout(() => {
                  wx.navigateBack({
                    delta: 1
                  });
                }, 1500);
              });
            }else{
              console.log(res.data);
              that.showInfo(res.data.errmsg);
            }
        },
        fail: (error) => {
          console.log(error);
        },
      });
    }
  }

});