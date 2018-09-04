// pages/selet/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/wx-cropper/index'
    })
  },
  onLoad: function () {
    wx.showShareMenu()

    var that = this
    //获取屏幕宽高
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        var windowHeight = res.windowHeight;
        that.setData({
          width: windowWidth,
          height: windowHeight,
        })
      }
    })
  
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