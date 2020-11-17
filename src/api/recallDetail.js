import request from '@/utils/request';

export function detail(query) {
  return request({
    url: '/nomo/recallDetail',
    method: 'get',
    params: query
  })
}