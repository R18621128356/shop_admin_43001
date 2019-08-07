import Vue from 'vue'
import App from './App.vue'
// 引入路由  挂载到路由实例上
import router from './router.js'

// 引入公共样式
import './assets/common.css'

// 引入 elementUI 以及其样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 解决 axios 的三个问题
import axios from 'axios'
Vue.use(ElementUI)
// 问题1. 每次都加基准地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 问题2 每个组件使用 axios 都需要引入
Vue.prototype.$axios = axios // 挂载到vue的原型中后，vue的实例都可以使用 $axios(组件的本质就是vue实例)
// 问题3. 每次都需要携带token
// 请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem('token')

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data.meta.status === 100011) {
    this.$router.push('/login')
  }

  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

// ----------
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
