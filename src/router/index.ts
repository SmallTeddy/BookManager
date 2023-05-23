import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '图书管理大师' }
  },
]

export const route404 = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/notFound/index.vue')
}
const router = createRouter({
  history: createWebHistory('/'),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
