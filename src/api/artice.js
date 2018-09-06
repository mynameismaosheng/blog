import request from '@/utils/request'

export function createArticle(data) {
  return request({
    url: '/api/addArtice',
    method: 'post',
    data
  })
}

export function fetchArticle() {
  return request({
    url: 'data/artice.json',
    method: 'get'
  })
}

export function fetchArticleDetail(id) {
  return request({
    url: 'data/'+id+'.txt',
    method: 'get'
  })
}
