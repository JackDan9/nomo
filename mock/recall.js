const Mock = require('mockjs')

const List = []
const count = 100

const LinkList = []
const linkCount = 3

const ImageList = []
const imageCount = 20

const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for(let j = 0; j < linkCount; j++) {
  LinkList.push(Mock.mock({
    link_title: Mock.Random.ctitle(18,24),
    link_date: '@datetime'
  }))
}

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    title: Mock.Random.ctitle(5, 7),
    display_time: '@datetime',
    content_short: '运动器材',
    content: Mock.Random.cparagraph(3, 5),
    content_label: '中度危害',
    pageviews: '@integer(1, 300)',
    detail: {
      title: Mock.Random.ctitle(14, 16),
      display_time: '@datetime',
      recall_date: '@datetime',
      brand_name: Mock.Random.cword(2, 3),
      origin_place: Mock.Random.cword(2, 3),
      hazard_level: Mock.Random.cword(2, 3),
      type: Mock.Random.cword(3, 4),
      production: Mock.Random.cword(2, 6),
      item_num: '@integer(1, 20)',
      risk: Mock.Random.cword(4),
      content: Mock.Random.cword(20, 30),
      recall_reason: Mock.Random.cword(20, 30),
      recall_way: Mock.Random.cword(20, 30),
      consumer_rights: Mock.Random.cword(20, 30),
      letter: Mock.Random.cword(5, 10),
      links: LinkList
    },
  }))
}

for(let i = 0; i < imageCount; i++) {
  ImageList.push(Mock.mock({
    id: '@increment',
    image_uri,
    size: '@integer(0, 1)'
  }))
}

module.exports = [
  {
    url: '/nomo/recall/menu',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          items: [
            {'value': '首页'},
            {'value': '服装'},
            {'value': '食品'},
            {'value': '汽车'},
            {'value': '儿童用品'},
            {'value': '家装材料'}
          ]
        }
      }
    }
  },
  {
    url: '/nomo/recall/list',
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
  },
  {
    url: '/nomo/recall/image',
    type: 'get',
    response: config => {
      const { page = 1, limit = 20, sort } = config.query

      let mockList = ImageList

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
  },
  {
    url: '/nomo/recall/detail',
    type: 'get',
    response: config => {
      const { id, type } = config.query;
      for(const list of List) {
        if(list.id === +id) {
          return {
            code: 200,
            data: list.detail
          }
        }
      }
    }
  },
]