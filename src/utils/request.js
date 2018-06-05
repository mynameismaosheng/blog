import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'

const service = axios.create({
  baseUrl: process.env.BASE_API,
  timeout: 5000
})

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
