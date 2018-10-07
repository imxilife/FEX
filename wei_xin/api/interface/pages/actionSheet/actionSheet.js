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
  actionSheetTap:function () {
    console.log('弹出actionsheet');
    wx.showActionSheet({
      itemList: ['打死你','求我啊','不答应'],
      itemColor: '#000000',
      success: (result)=>{
        console.log('执行成功-' + result.tapIndex);
      },
      fail: ()=>{
        console.log('执行失败');
      },
      complete: ()=>{
        console.log('执行完成');
      }
    });
  }
});