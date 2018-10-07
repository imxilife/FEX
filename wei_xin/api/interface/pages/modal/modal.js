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
    wx.showModal({
      title: '请选择',
      content: '中国是最强大的国家?',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if(result.confirm){
          console.log('是的');
        }else{
          console.log('自欺欺人');
        }
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  click_hide:function (params) {
  
  }
});