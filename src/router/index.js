import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let home = () => {return import('views/home/home')}
let itemize = () => {return import('views/itemize/itemize')}
let shopping = () => {return import('views/shopping/shopping')}
let detail = () => {return import('views/detail/detail')}
let user = () => {return import('views/user/user')}
let login = () => {return import('views/user/login/login')}
let register = () => {return import('views/user/register/register')}
let userHome = () => {return import('views/user/userHemo/userHome')}
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
    component:user,
    children:[
      {
        path: '',
        redirect:'login'
      },
      {
        path:'login',
        component:login
      },
      {
        path:'register',
        component:register
      },
      {
        path:'userHome',
        component:userHome
      }
    ]
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
