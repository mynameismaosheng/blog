import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Info from '@/components/Info'
import menu from '@/components/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: menu,
      children: [
        {
          path: 'info',
          component: Info
        },
        {
          path: 'home',
          component: Info
        },
        {
          path: '/infos',
          name: 'Infos',
          component: HelloWorld
        }
      ]
    }
  ]
})
