const Mock = require('mockjs')

const List = []
const count = 100

for(let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    fly_start_time: '06:45',
    fly_end_time: '09:05',
    fly_speed_time: '2小时35分钟',
    departure: '大兴国际',
    destination: '浦东机场T1',
    price: '@integer(100, 1000)',
    class: '经济舱',
    airline: '上海航空9C8542',
    airport: '波音@integer(100, 1000)',
    pageviews: '@integer(300, 5000)',
  }))
}

module.exports = [
  {
    url: '/nomo/home/prices',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          items: [
            {'value': 100},
            {'value': 200},
            {'value': 300},
            {'value': 400},
            {'value': 500},
            {'value': 600},
            {'value': 700},
            {'value': 800},
            {'value': 900}
          ]
        }
      }
    }
  },
  
  {
    url: '/nomo/home/list',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, sort } = config.query;

      let mockList = List;

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 200,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]