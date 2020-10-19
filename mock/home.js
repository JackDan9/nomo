const Mock = require('mockjs');

const List = [];
const count = 100;

for(let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    fly_start_time: '@datetime',
    fly_end_time: '@datetime',
    departure: '大兴国际',
    destination: '浦东机场T1',
    price: '@integer(100, 1000)',
    class: '经济舱',
    airline: '上海航空9C8542 波音787',
    pageviews: '@integer(300, 5000)',
  }))
}

module.exports = [
  {
    url: '/nomo/home/prices',
    type: 'get',
    response: _ => {
      return {
        code: 2000,
        data: {
          pricesData: [
            {'value': 100},
            {'value': 200},
            {'value': 300},
            {'value': 400},
            {'value': 500},
            {'value': 600},
            {'value': 700},
            {'value': 800},
            {'value': 900},
            {'value': 1000}
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
        code: 2000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  }
]