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
    adjust:true,
    array:['中国','美国','日本','巴西'],
    index:0,
    time:'00:00',
    date:'2018-09-24',
    region:['广东省','深圳市','南山区']
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
  },
  input:function (e) {
    console.log(e);
  },
  focus:function (e) {
    console.log(e);
  },
  //失去焦点回调
  blur:function (e) {
    console.log(e);
  },
  //按回车键回调
  confirm:function (e) {
    console.log(e);
  },
  change:function (e) {
    console.log(e);
    this.setData({index:e.detail.value});
  },
  cancel:function (e) {
    console.log(e);
  },
  bindTimeChange:function (e) {
    console.log(e);
    this.setData({time:e.detail.value});
  },
  bindDateChange:function (e) {
    console.log(e);
    this.setData({date:e.detail.value});
  },
  bindRegionChange:function (e) {
    this.setData({region:e.detail.value});
  }
});