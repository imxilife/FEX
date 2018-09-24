//Page Object
var audioPlay;
Page({
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name:'此时此刻',
    author:'许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    loop:'true',
    controls:'true',
    image_src:""
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    audioPlay = wx.createInnerAudioContext('myAudio');
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
  audio_error:function (e) {
    console.log(e);
  },
  play:function (e) {
    console.log(e);
  },
  pause:function (e) {
    console.log(e);
  },
  update:function (e) {
    console.log(e);
  }
});