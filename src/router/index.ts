import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { QiankunWindow } from '@/plugins/qiankun'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory((window as QiankunWindow).__POWERED_BY_QIANKUN__ ? '/#/base' : '/'),
  routes
})

export default router
