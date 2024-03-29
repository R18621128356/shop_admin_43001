// 1. 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 第三步 引入组件
import Login from './components/login/Login.vue'
import Home from './components/home/Home.vue'
import Users from './components/users/Users.vue'
import Roles from './components/roles/Roles.vue'
import Rights from './components/rights/Rights.vue'
//
// 在模块化工程中，必须使用 use 明确的安装一个路由功能

Vue.use(VueRouter)

// 2.实例化路由
const router = new VueRouter({
  // 第二步： 规则
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      children: [{
        path: '/users',
        component: Users
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/rights',
        component: Rights
      }
      ]
    }

  ]

})

// 导航守卫
router.beforeEach((to, from, next) => {
  // 1.判断是不是登陆页面
  //  to : 访问的是目标路由对象
  if (to.path === '/login') {
    next()
  } else {
    // 其他页面
    // 2.判断是否登陆过
    let token = localStorage.getItem('token')
    token ? next() : next('/login')
  }

  next()
})

// 3.通过 es6 模块化语法 把router  导 处去
export default router
