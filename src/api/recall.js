import request from '@/utils/request';

export function fetchList(query) {
  return request({
    url: '/nomo/recall/list',
    method: 'get',
    params: query
  })
}

export function fetchMenuList(query) {
  return request({
    url: '/nomo/recall/menu',
    method: 'get',
    params: query
  })
}

export function fetchImageList(query) {
  return request({
    url: '/nomo/recall/image',
    method: 'get',
    params: query
  })
}