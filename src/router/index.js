import Vue from 'vue'
import VueRouter from 'vue-router'






Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProbNik',
    component: () => import('../components/ProbNik')

  },
  {
    path: '/about',
    name: 'MyP',
    component: () => import('../components/MyP')
  },
  {
    path: '/add/:date/:category/:value',
    name: 'AddForm',
    component: () => import('../components/ProbNik')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../components/NotFound')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
