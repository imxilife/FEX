//Page Object
Page({
    data: {
        tempFilePath: '',
        savedFilePath: '',
        dialog: {
            hidden: true
        }
    },
    //options(Object)
    onLoad: function (options) {

    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    },

    /** 
     * 下载文件
     * 小程序下载的临时文件以tmp开头的文件名
     * 本地保存是以store开头的文件名 如果将临时文件保存的话 临时文件会被移除 本地存储的最大限制是10M
     * 
     * 
     */
    downloadFile: function (e) {
        console.log('download pdf file');

        var self = this;
        var downTask = wx.downloadFile({
            url: 'http://sznk.fcloud.store.qq.com/store_raw_download?buid=16821&uuid=d404ff17c1f74a4a95a33b3324d98922&fsname=demo.pdf',
            success: (res) => {
                console.log('download file ', res);
                if (res.tempFilePath) {
                    console.log(res.tempFilePath);
                    wx.getFileInfo({
                        filePath: res.tempFilePath,
                        digestAlgorithm: 'sha1',
                        success: function (res) {
                            console.log('size:' + res.size + "/" + "digest:" + res.digest);
                        },
                        fail: function (params) {
                            console.log(e);
                        },
                        complete: function (params) {
                            console.log('complete');
                        }
                    });
                }
                self.setData({
                    tempFilePath: res.tempFilePath
                });
            },
            fail: () => {
                console.log(e);
            },
            complete: () => {
                console.log('complete');
            }
        });
        downTask.onProgressUpdate((res) => {
            console.log(res);
        });

    },
    saveFile: function () {
        console.log('save file');
        if (this.data.tempFilePath.length > 0) {
            var self = this;
            wx.saveFile({
                tempFilePath: this.data.tempFilePath,
                success: (res) => {
                    console.log('saveFilePath:', res.savedFilePath);
                    self.setData({
                        savedFilePath: res.savedFilePath
                    });
                    self.setData({
                        dialog: {
                            title: '保存成功',
                            content: '文件保存成功',
                            hidden: false
                        }
                    });
                },
                fail: () => {
                    console.log(e);
                },
                complete: () => {
                    console.log('complete');
                }
            });
        }
    },
    clear: function () {
        console.log('clear');
        var self = this;
        wx.getSavedFileList({
            success: (res) => {
                console.log(res.fileList.length);
                let fileLen = res.fileList.length;
                for (let index = 0; index < res.fileList.length; index++) {
                    /*   const element = res.fileList[index];
                      console.log('filePath:'+element.filePath+'/'+'size:'+element.size+'/'+'createTime:'+element.createTime); */
                    wx.removeSavedFile({
                        filePath: res.fileList[index].filePath,
                        success: (res) => {
                            console.log('remove file success');
                            if (index === fileLen - 1) {
                                self.setData({
                                    dialog: {
                                        title: '删除成功',
                                        content: '全部文件成功删除',
                                        hidden: false
                                    }
                                });
                            }
                        },
                        fail: () => {
                            console.log('remove file fail');
                        },
                        complete: () => {
                            console.log('remove file complete');
                        }
                    });
                }
            },
            fail: () => {
                console.log('fail');
            },
            complete: () => {
                console.log('complete');
            }
        });
    },
    openFile: function () {
        console.log('open file');
        //let filepath;
        wx.getSavedFileList({
            success: (res) => {
                let fileItem = res.fileList[0];
                wx.openDocument({
                    filePath: fileItem.filePath,
                    fileType: 'pdf',
                    success: (res) => {
                        console.log('文件打开成功');
                    },
                    fail: () => {
                        console.log('文件打开失败');
                    },
                    complete: () => {
                        console.log('打开文件完成');
                    }
                });
            },
            fail: () => {
                console.log('fail');
            },
            complete: () => {
                console.log('complete');
            }
        });
    },
    confirm: function (params) {
        this.setData({
            'dialog.hidden': true
        });
    }
});