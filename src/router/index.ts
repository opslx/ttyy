import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'Home',
    component:()=>import('../components/index.vue'),
  },
  {
      path: '/calendar',
      name: 'Calendar',
      component:()=>import('../views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/login/index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component:()=>import('../views/user/index.vue'),
  },
  {
    path: '/book',
    name: 'Book',
    component:()=>import('../views/book/index.vue'),
  },
  {
    path: '/book/:tag',
    name: 'TagBook',
    component:()=>import('../views/book/index.vue'),
  },
  {
    path: '/sign',
    name: 'Sign',
    component:()=>import('../views/sign/index.vue'),
  },
  {
    path: '/word/:bookId',
    name: 'Word',
    component:()=>import('../views/word/index.vue'),
  },
  {
    path: '/word/collect/:userWordId',
    name: 'WordCollect',
    component:()=>import('../views/word/index.vue'),
  },
  {
    path: '/collect',
    name: 'Collect',
    component:()=>import('../views/collect/index.vue'),
  },
  {
    path: '/grade',
    name: 'Grade',
    component:()=>import('../views/grade/index.vue'),
  },
  {
    path: '/setting',
    name: 'Setting',
    component:()=>import('../views/setting/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router