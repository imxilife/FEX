//Page Object
Page({
  data: {
    items:[{
      name:'USA',
      value:'美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked:true
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }, ],
    disable:false,
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
  changed: function (e) {
    console.log(e);
  }
});