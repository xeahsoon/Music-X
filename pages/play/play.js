// pages/play/play.js
Page({
    data: {
        glass: '/images/singer.jpg',
        theme: '#428bca',
        showLyric: false,
        showPlayList: false,
        musicPlaying: false
    },
    onLoad: function (options) {
        var data = JSON.parse(options.data);

        this.setData({
            theme: data.sites_theme[data.index]
        });
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: data.sites_theme[data.index]
        })
    },
    switchView: function(e) {
        console.log("Switching view..");
        this.setData({
            showLyric: !this.data.showLyric
        });
    },
    showPlayList: function (e) {
        this.setData({
            showPlayList: !this.data.showPlayList
        });
    },
    checkIfListTaped: function(e) {
        var id = e.target.id;
        if(id != 'playList' && id !='list') {
            this.setData({
                showPlayList: false
            });
        }
    },
    playSong: function (e) {
        this.setData({
            musicPlaying: !this.data.musicPlaying
        });
    },
    shareThisSong: function(e) {
        console.log('Sharing..');
        wx.showShareMenu({
            withShareTicket: true
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})