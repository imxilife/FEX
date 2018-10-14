//Page Object
Page({
  data: {
    bookInfo:{},
    downloading:false,
    bookIsBuy:-1,
    commentLoading:true,
    commentList: [],
    downloadPercent:0
  },
  //options(Object)
  onLoad: function(options){
    let _bookInfo = {};
    let that = this;
    _bookInfo[key] = decodeURIComponent(options[key]);
    that.setData({
      bookInfo:_bookInfo
    });
    that.getPageData();
  },

  // 获取书籍评论列表及是否购买
  getPageData:function (params) {
    
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

  getBookDetail :function (key) {
    let flag = wx.getStorageSync(key);
    if(flag){

    }else{

    }
  }

});