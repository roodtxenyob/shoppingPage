import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let home = () => {return import('views/home/home')}
let itemize = () => {return import('views/itemize/itemize')}
let shopping = () => {return import('views/shopping/shopping')}
let user = () => {return import('views/user/user')}
let detail = () => {return import('views/detail/detail')}

let routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/itemize',
    component:itemize
  },
  {
    path: '/shopping',
    component:shopping
  },
  {
    path: '/user',
    component:user
  },
  {
    path: '/detail',
    component:detail
  }
]
let router = new VueRouter({
  routes,
  mode:'history'
})

export default router
