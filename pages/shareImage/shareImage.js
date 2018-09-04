// pages/shareImage/shareImage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    poemArray: ['/images/poem_01.png', '/images/poem_02.png', '/images/poem_03.png', '/images/poem_04.png', '/images/poem_05.png', '/images/poem_06.png', '/images/poem_07.png', '/images/poem_08.png', '/images/poem_09.png', '/images/poem_10.png']
  },

  // 下载图片
  dawnload: function () {
    wx.canvasToTempFilePath({
      canvasId: 'shareCanvas',
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res1) {
            wx.showToast({
              title: '已保存到相册'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var poemIndex = Math.ceil(Math.random() * 10) - 1
    var that = this
    //获取屏幕宽高
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        var windowHeight = windowWidth * 2668 / 1500;
        var windowscale = 2668 / 1500;//屏幕高宽比
        var widthscale = windowWidth / 1500
        var heightscale = windowHeight / 2668
        console.log(widthscale)
        console.log(widthscale)
        that.setData({
          width: windowWidth,
          height: windowHeight,
          widthscale: widthscale,
          heightscale: heightscale
        })
      }
    })
    var ctx = wx.createCanvasContext('shareCanvas')
    var avatarurl_width = 1415 * this.data.widthscale;    //绘制的头像宽度
    var avatarurl_heigth = 1800 * this.data.heightscale;   //绘制的头像高度
    var avatarurl_x = 50 * this.data.widthscale;   //绘制的头像在画布上的位置
    // var avatarurl_y = 1037 * this.data.heightscale;   //绘制的头像在画布上的位置
    var avatarurl_y = 350 * this.data.heightscale;   //绘制的头像在画布上的位置

    console.log(ctx)
    console.log(getApp().globalData.getImage)
    ctx.drawImage('/images/shareBG.jpg', 0, 0, this.data.width, this.data.height)
    ctx.drawImage(getApp().globalData.getImage, avatarurl_x, avatarurl_y, avatarurl_width, avatarurl_heigth)
    ctx.drawImage(this.data.poemArray[poemIndex], 5, 1619 * this.data.heightscale, this.data.width - 10, 509 * this.data.heightscale)
    ctx.stroke()
    ctx.draw()
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
    return{
      path: '/pages/index/index'
    }
  }
})