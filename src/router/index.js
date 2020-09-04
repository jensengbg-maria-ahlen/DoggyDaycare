import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import('@/views/Dogs.vue')
  },
  {
    path: '/dogs/:chipNumber',
    name: 'DogInfo',
    component: () => import('@/views/DogInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
