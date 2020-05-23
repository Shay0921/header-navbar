const app = getApp()
Page({
  Y:100,
  lock:false,
  data: {
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, // 是否显示左上角图标   1表示显示    0表示不显示
      title: '组件列表', // 导航栏 中间的标题
      textColor: '#fff', // 标题颜色
      bgColor: '#3281ff', // 导航栏背景颜色
      btnBgColor: '#2B6ED9', // 胶囊按钮背景颜色
      iconColor: 'white', // icon颜色 black/white
      borderColor: 'rgba(255, 255, 255, 0.3)' // 边框颜色 格式为 rgba()，透明度为0.3
    },
    // 此页面 页面内容距最顶部的距离
    height: app.globalData.systeminfo.statusBarHeight * 2 + 20,
  },
  onLoad() {
  },
  startPullDown(e) {
    let { clientY } = e.changedTouches[0];
    this.startY = clientY;
    this.startTime = new Date().getTime()
  },
  endPullDown(e) {
    let { clientY } = e.changedTouches[0];
    this.endY = clientY;
    this.endTime = new Date().getTime();
    if(this.endTime-this.startTime>300 && this.endY-this.startY>50) {
      this.setData({
        loading:true
      })
      
      setTimeout(() => {
        this.setData({
          loading: false
        })
      }, 2000);
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})