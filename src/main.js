import Vue from 'vue'
import App from './App.vue'
// 引入路由  挂载到路由实例上
import router from './router.js'

// 引入公共样式
import './assets/common.css'

// 引入 elementUI 以及其样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
