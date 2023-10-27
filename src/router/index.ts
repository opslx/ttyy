import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
  //路由初始指向
    path: '/',
    name: 'Home',
    component:()=>import('../components/index.vue'),
    meta:{keepAlive:false}
  },
  {
      path: '/calendar',
      name: 'Calendar',
      component:()=>import('../views/home/index.vue'),
      meta:{keepAlive:false}
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/login/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/user',
    name: 'User',
    component:()=>import('../views/user/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/book',
    name: 'Book',
    component:()=>import('../views/book/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/book/:tag',
    name: 'TagBook',
    component:()=>import('../views/book/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/sign',
    name: 'Sign',
    component:()=>import('../views/sign/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/word/:bookId',
    name: 'Word',
    component:()=>import('../views/word/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/word/collect/:userWordId',
    name: 'WordCollect',
    component:()=>import('../views/word/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/collect',
    name: 'Collect',
    component:()=>import('../views/collect/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/grade',
    name: 'Grade',
    component:()=>import('../views/grade/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/setting',
    name: 'Setting',
    component:()=>import('../views/setting/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/search',
    name: 'Search',
    component:()=>import('../views/search/index.vue'),
    meta:{keepAlive:true}
  },
  {
    path: '/search/word/:WordId',
    name: 'SearchWord',
    component:()=>import('../views/word/index.vue'),
    meta:{keepAlive:false}
  },
  {
    path: '/user/setting',
    name: 'UserSetting',
    component:()=>import('../views/userSetting/index.vue'),
    meta:{keepAlive:false}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router