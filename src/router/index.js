import Vue from 'vue'
import VueRouter from 'vue-router'

import MyP from '../components/MyP'
import ProbNik from '../components/ProbNik'
import NotFound from '../components/NotFound'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProbNik',
    component: ProbNik
  },
  {
    path: '/about',
    name: 'MyP',
    component: MyP
  },
  {
    path: '/add/:date/:category/:value',
    name: 'AddForm',
    component: ProbNik
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
