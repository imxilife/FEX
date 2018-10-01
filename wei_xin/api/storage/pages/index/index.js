//Page Object
Page({
    data: {
        dialog:{
            hidden:true
        },
        key:'',
        data:''
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
    confirm:function(){
        this.setData({
           dialog:{
               hidden:true
           } 
        });
    },
    setStorage:function(){
        console.log('setStorage');
        let key = this.data.key;
        let value = this.data.data;
        let self  = this;
        wx.setStorage({
            key: key,
            data: value,
            success: (res)=>{
                self.setData({
                    dialog:{
                        title:'保存',
                        hidden:false,
                        content:'保存成功'
                    }
                });
            },
            fail: ()=>{
                console.log('fail');
            },
            complete: ()=>{
                console.log('complete');
            }
        });
    },

    getStorage:function(){
        console.log('getStorage');
        let self = this;
        wx.getStorage({
            key: self.data.key,
            success: (res)=>{
                self.setData({
                    dialog:{
                        title:'获取数据',
                        hidden:false,
                        content:res.data
                    }
                });
            },
            fail: ()=>{
                console.log('fail');
            },
            complete: ()=>{
                console.log('complete');
            }
        });
    },

    getAllStorage:function(){
        console.log('getAllStorage');
        wx.getStorageInfo({
            success: (result)=>{
                console.log(result);
            },
            fail: ()=>{
                console.log('fail');
            },
            complete: ()=>{
                console.log('complete');
            }
        });
    },

    clearStorage:function(){
        console.log('clearStorage');
        wx.clearStorage({
            success:function(){
                console.log('success');
            },
            fail:function(){
                console.log('fail');
            },
            complete:function(){
                console.log('complete');
            }
        });
    },

    keyChange:function(e){
        console.log('keyChange input value is '+e.detail.value);
        this.data.key = e.detail.value;
    },

    dataChange:function(e){
        console.log('dataChange input value is '+e.detail.value);
        this.data.data = e.detail.value;
    }

});