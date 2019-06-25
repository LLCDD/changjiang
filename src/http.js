import axios from 'axios'
import { getToken } from '@/util/token'
import qs from 'qs'
import config from './config'
import router from './router'
import Vue from 'vue'
console.log(config)

// 创建axios实例
const http = axios.create({
  baseURL: config.api_base,
  timeout: 30000,
  transformRequest: [
    function (data, headers) {
      data = data || {}
      data = qs.stringify(data)
      headers['Authorization'] = localStorage.getItem('token')
      return data
    }
  ]
})

// request拦截器
http.interceptors.request.use(config => {
  config.data = config.data ? config.data : {}
  if (router.currentRoute && router.currentRoute.meta.requiresAuth) {
    if (localStorage.getItem('token') === '') {
      return Promise.reject('请登录后操作')
    } else {
      return config
    }
  } else {
    return config
  }
})

// respone拦截器
http.interceptors.response.use(
  response => {
    let data = response.data

    let msg = data.message || ''
    if (data.code == 401) {
      // 账号禁用
      Vue.toasted.error(data.message, { icon: 'error' }).goAway(2000)
      router.replace({ name: 'login' })
      return Promise.reject(new Error(msg))
    } else if (data.code == 403) {
      // 登录失效 需重新登录
      Vue.toasted.error('登录失效 需重新登录', { icon: 'error' }).goAway(2000)
      router.replace({ name: 'login' })
      return Promise.reject(new Error(msg))
    } else if (data.code == 400) {
      return Promise.reject(new Error(msg))
    }
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
