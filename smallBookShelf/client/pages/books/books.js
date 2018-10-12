

var api = require('../../config/config.js');
var app = getApp();

//Page Object
Page({
  data: {
    
    bookList:[],
    indicatordots:false,
    indicator:false,
    autoPlay:false,
    interval:5000,
    duration:3000,
    circular:true,
    vertical:false,
    loading:true,
    margin:'100rpx',
  },
  //options(Object)
  onLoad: function(){
    console.log('books page onLoad');
    this.getBookList();
  },

  onReady: function(){
    console.log('onReady');
  },
  onShow: function(){
    console.log('onShow');
  },
  onHide: function(){
    console.log('onHide');
  },

  onShareAppMessage: function(res){
    if(res.from === 'button'){
      console.log('来自页面内转发按钮');
    }
    return{
      title:'小书架首页',
      path:'/pages/books/books',
      imageUrl:'images/bookstore.png',
      success:function (res) {
        console.log('转发成功');
      },
      fail:function (error) {
        console.log('转发失败');
      }
    }
  },

  /* 
  获取所有书籍列表
  */
  getBookList:function (params) {
      let that = this;
      wx.request({
        url: api.getBookUrl,
        data: {
          is_all: 1
        },
        success: (res) => {
          let data = res.data;
          console.log(data.data);
          if (data.result === 0) {
            setTimeout(() => {
              that.setData({
                bookList: data.data,
                loading: false,
              });
            }, 5000);
          }
        },
        fail: (error) => {
          console.log(error);
        },
      });
  },

  /* 
  转到书籍详情页面
  */
  goDetail:function (ev) {
    let info = ev.currentTarget.dataset;
    let navigateUrl = '../detail/detail?';
    for(let key in info){
        info[key] = encodeURIComponent(info[key]);
        navigateUrl += key + '=' +info[key] + '&';
    }
    navigateUrl = navigateUrl.substring(0, navigateUrl.length - 1);
    
    wx.navigateTo({
      url: navigateUrl,
    });
  },

});

