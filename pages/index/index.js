Page({
  data: {
    goodlist: [{
        id: 110,
        name: '男衬衫',
        price: 100
      },
      {
        id: 111,
        name: '男衬衫2',
        price: 101
      },
      {
        id: 112,
        name: '男衬衫3',
        price: 102
      },
      {
        id: 113,
        name: '男衬衫4',
        price: 103
      }
    ],
    counter: 0
  },
  addClick() {
    this.setData({
      counter: this.data.counter += 1
    })
  },
  delClick() {
    this.setData({
      counter: this.data.counter -= 1
    })
  },
  handgetuserinfo(event){
    console.log(event)

  },
  clickhahaha(){
    console.log('clickhahaha被点击了')
  },
  //页面加载出来时
  onLoad(){
    console.log('onLoad')
    wx.request({
      url:'http://v.juhe.cn/toutiao/index',
      success:function(res){
        console.log(res)
      }
    })
  },
  //页面显示出来时
  onShow(){
    console.log('onShow')
  },
  //页面初次渲染完成时
  onReady(){
    console.log('onReady')
  },
  //当页面隐藏起来时
  onHide(){
    console.log('onHide')
  },
  //当页面销毁时
  onUnload(){
    console.log('onUnload')
  },



  //监听页面的滚动
  onPageScroll(obj){
    // console.log(obj)
  },



  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }

})