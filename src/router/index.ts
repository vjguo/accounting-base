import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/home-view.vue'
import AccountBookView from '@/views/account-book/account-book-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/base'
  },
  {
    path: '/base',
    component: HomeView
  },
  {
    path: '/base/account-book',
    component: AccountBookView
  }
]

const router = createRouter({
  // https://github.com/umijs/qiankun/issues/1865
  // history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/base/' : '/'),
  history: createWebHistory(),
  routes
})

export default router
