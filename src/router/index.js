import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
import Info from '@/components/Info'
// import Menu from '@/components/Menu'
import Layout from '@/view/layout/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/info',
          component: Info
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/infos',
          name: 'Infos',
          component: HelloWorld
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: Layout,
      children: [
        {
          path: '/',
          component: resolve => require(['@/view/userinfo/userinfo.vue'], resolve)
        }
      ]
    },
    {
      path: '/Article',
      component: Layout,
      redirect: '/article/write',
      children: [
        {
          path: 'write',
          component: resolve => require(['@/view/article/write.vue'], resolve)
        },
        {
          path: 'myopus',
          component: resolve => require(['@/view/article/myopus.vue'], resolve)
        },
        {
          path: 'new',
          component: Home
        }
      ]
    }
  ]
})
