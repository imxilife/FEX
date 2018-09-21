//Page Object

Page({
    data: {
       indicatorDots:true,
       autoPlay:true,
       interval:5000,
       duration:100,
       imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
           'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
           'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
       ],
       background:['demo-text-1','demo-text-2','demo-text-3'],
       previousMargin:0,
       nextMargin:0
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
    change:function name(e) {
        console.log('change');
    },
    animation_finish:function (e) {
      console.log('finish');
    },
    changeProperty:function name(e) {
        console.log(e);
    },
    
});