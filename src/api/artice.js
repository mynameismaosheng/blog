import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: 'article/create',
    method: 'post',
    data
  })
}

export function fetchArticle(data) {
  return request({
    url: 'getData',
    method: 'get',
    data
  })
}
