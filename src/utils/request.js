import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   // console.log(config);
//   // axios.defaults.baseURL = 'http://47.94.230.236:6892/api/';
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
