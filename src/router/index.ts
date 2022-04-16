import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/home-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/base/' : '/'),
  routes
})

export default router
