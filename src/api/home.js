import request from '@/utils/request';

export function fetchList(query) {
  return request({
    url: '/nomo/home/list',
    method: 'get',
    params: query
  })
}

export function fetchPriceList(query) {
  return request({
    url: '/nomo/home/prices',
    method: 'get',
    params: query
  })
}