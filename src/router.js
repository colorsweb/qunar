import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home'
import City from './pages/city/City'
import Detail from './pages/detail/Detail'
import Eva from './pages/detail/detailChildren/Eva'
import Intro from './pages/detail/detailChildren/Intro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail,
      children:[
        {
          path:'eva',
          name:'Eva',
          component:Eva
        },
        {
          path:'intro',
          name:'Intro',
          component:Intro
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
