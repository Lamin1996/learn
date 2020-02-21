// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemclick(event){
      const dataset = event.currentTarget.dataset
      const index = dataset.index 
      this.setData({
        currentIndex: this.currentIndex = index
      })
      //通知页面内部的点击事件
      this.triggerEvent('itemclick',{index,titles:this.properties.titles[index]},{})
    }
  }
})
