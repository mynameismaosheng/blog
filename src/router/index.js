import Vue from 'vue'
import Router from 'vue-router'
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
          path: '/home',
          component: resolve => require(['@/view/Home/Home.vue'], resolve)
        }
      ]
    },
    {
      path: '/user',
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
          path: 'detail',
          component: resolve => require(['@/view/article/writeDetail.vue'], resolve)
        }
      ]
    },
    {
      path: '/static',
      component: Layout,
      children: [
        {
          path: '/',
          component: resolve => require(['@/view/statics/static.vue'], resolve)
        }
      ]
    },
  ]
})
