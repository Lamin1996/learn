// pages/button/button.js
Page({
  data: {
    isloading: false,
    time: new Date().toLocaleTimeString(),
    isShow:true,
    score:50,
    titles:['衣服','鞋子','裤子']
  },

  clicktest() {
    this.setData({
      isloading: this.isloading = !this.isloading
    })
  },
  onLoad() {
    setInterval(
      () => {
        this.setData({
          time: new Date().toLocaleTimeString()
        })
      }, 1000
    )
  },
  changeclick(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  changescore(){
    this.setData({
      score:this.data.score += 10
    })
  },
  touchstart(){
    console.log('touchstart')
  },
  touchmove() {
    console.log('touchmove')
  },
  touchend(){
    console.log('touchend')
  },
  longtap(){
    console.log('longtap')
  },
  //
  eventclick(event){
    console.log(event)
  },
  outclick(event){
    console.log(event)
  },
  inclick(event) {
    console.log(event)
  },
  clickitem(event){
    console.log(event)
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title,index)
  }
})