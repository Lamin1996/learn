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
  }
})