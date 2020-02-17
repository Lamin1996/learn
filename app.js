//app.js
App({

  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function () {
    //异步操作
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // setTimeout(function(){
    //   const err = new Error

    //   throw err
    // },2000)
  },
  //小程序界面显示出来之后会执行的生命周期函数
  onShow:function(options){
    //判断小程序的进入场景
    console.log(options)
    switch(options){
      case 1001 :
      break
    }
  },
  //界面被隐藏时被执行
  onHide:function(){
    console.log('界面别隐藏时执行：onHide')
  },
  //发生错误的时候被执行
  onError:function(msg){
    console.log('小程序发生了一些小错误')
  },
  globalData: {
    userInfo: null,
    name:'wingcheung',
    age:24
  }
})