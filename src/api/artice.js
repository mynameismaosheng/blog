import request from '@/utils/request'

export function createArticle(data) {
  console.log(data);
  return request({
    url: 'article/create',
    method: 'post',
    data
  })
}
