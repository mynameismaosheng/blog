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
      children: [
        {
          path: '/info',
          component: Info
        },
        {
          path: '/',
          component: Home
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
      path: '/article',
      name: 'article',
      component: Layout,
      children: [
        {
          path: 'hot',
          component: Info
        },
        {
          path: 'new',
          component: Home
        }
      ]
    }
  ]
})
