import { type RouteRecordRaw, createWebHashHistory, createRouter } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    component: () => import('@/views/dashboard/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
