//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        // 站点下标
        index: 0,
        sites: ['酷狗音乐', '网易云音乐', 'QQ音乐', '酷我音乐', '百度音乐', '虾米音乐'],
        sites_en: ['kugou', 'netease', 'qqmusic', 'kuwo', 'baidu', 'xiami'],
        sites_theme: ['#1E84E4', '#EA2000', '#0FAE53', '#F0BA42', '#0AD5C6', '#FF5E00'],

        currentTab: 0,
        controlShow: true,

        taylor: 5,

        keyword: '',
        searchInputFocus: false,
        results: ['a', 'b', 'c'],
        songs: 20,
        lyric: ['We were both young when I first saw you',
                'I closed my eyes and flashback starts',
                'I am standing there',
                'On a balcony in summer air',
                'See the light see the paty the ...'],
        musicPlaying: false
    },
    onLoad: function(e) {
        // wx.navigateTo({
        //     url: '/pages/play/play',
        // })
    },
    goPage: function(e) {
        var page = e.currentTarget.dataset.page;
        wx.navigateTo({
            url: '/pages/' + page + '/' + page +'?data=' + JSON.stringify(this.data),
        })
    },
    switchTab: function(e) {
        this.setData({
            currentTab: e.detail.current
        });
    },
    onSiteChange: function(e) {
        console.log("Changing site.. " + e.detail.value);
        this.setData({
            index: e.detail.value
        });
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: this.data.sites_theme[e.detail.value],
        });
    },
    onSearchFocus: function(e) {
        console.log("Input focus..");
        this.setData({
            searchCancelShow: true
        });
    },
    onSearchInput: function(e) {
        console.log("Searching.. " + e.detail.value);
        this.setData({
            keyword: e.detail.value
        });
    },
    onSearchClear: function(e) {
        console.log("Clearing search..");
        this.setData({
            keyword: '',
            searchInputFocus: true
        });
    },
    playSong: function(e) {
        this.setData({
            musicPlaying: !this.data.musicPlaying
        });
    }
})
