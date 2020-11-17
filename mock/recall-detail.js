const Mock = require('mockjs');

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    title: Mock.Random.ctitle(8, 10),
    display_time: '@datetime',
    recall_date: '@datetime',
    brand_name: Mock.Random.cword(1, 3),
    origin_place: Mock.Random.cword(1, 3),
    hazard_level: Mock.Random.cword(1, 2),
    type: Mock.Random.cword(1, 3),
    production: Mock.Random.cword(1, 3),
    item_num: '@integer(1, 20)',
    risk: Mock.Random.cword(1, 6),
    content: Mock.Random.cword(20, 30),
    recall_reason: Mock.Random.cword(20, 30),
    recall_way: Mock.Random.cword(20, 30),
    consumer_rights: Mock.Random.cword(20, 30),
    letter: Mock.Random.cword(5, 10)
  }))
}

module.exports = [
  {
    url: '/nomo/recallDetail',
    type: 'get',
    response: config => {
      const { id, type } = config.query;
      for(const detail of List) {
        if(detail.id === +id) {
          return {
            code: 200,
            data: detail
          }
        }
      }
    }
  },
]