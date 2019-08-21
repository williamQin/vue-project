import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 柯里化函数
// const component = name => () => (import("@/components/" + name))
const page = name => () => (import("@/pages/" + name))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/system/config',
      component: page('Home'),
      children: [
        {
          path: '/system/config',
          component: page('system/Config')
        },
        {
          path: '/system/dataSource',
          component: page('system/DataSource')
        },
        {
          path: '/system/monitor',
          component: page('system/Monitor')
        },
        {
          path: '/user/account',
          component: page('user/Account')
        },
        {
          path: '/user/info',
          component: page('user/Info')
        },
        {
          path: '/user/permission',
          component: page('user/Permission')
        },
        {
          path: '/app/info',
          component: page('app/Info')
        },
        {
          path: '/app/seal',
          component: page('app/Seal')
        },
        {
          path: '/app/doc',
          component: page('app/Doc')
        }
      ]
    }
  ]
})
