

var api = require('../../config/config.js');
var app = getApp();

//Page Object
Page({
  
  data: {
    bookList:[],
    indicatordots:false,   //是否显示轮播指示点
    autoPlay:false,        //是否自动播放
    interval:5000,         //轮播间隔
    duration:3000,         //轮播时长
    circular:true,         //是否采用衔接滑动
    vertical:false,        //是否垂直滚动
    sideMargin:'100rpx',   //幻灯片前后距
    loading:true,          //是否显示loading状态
  },
  
  //生命周期函数 加载页面
  onLoad: function(){
    this.getBookList();
  },

  //转发分享
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
 
  //获取所有书籍列表
  getBookList:function (params) {
      let that = this;
      wx.request({
        url: api.getBookUrl,
        data: {
          is_all: 1
        },
        success: (res) => {
          let data = res.data;
         // console.log(data.data);
          if (data.result === 0) {
            setTimeout(() => {
              that.setData({
                bookList: data.data,
                loading: false,
              });
            }, 2000);
          }
        },
        fail: (error) => {
          console.log(error);
        },
      });
  },
 

  //转到书籍详情页面
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
  

  //生命周期函数 界面呈现
  onShow:function () {
    console.log('book page on show ');
  }


});

