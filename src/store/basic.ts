import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import type { RouterTypes } from '../basic'
import router, { routes } from '@/router'
import {setCookieRefresh,setCookieToken} from "@/utils/cookie";

export const useBasicStore = defineStore('basic', {
  state: () => {
    return {
      bookId:1,
      token: null,
      refresh:null,
      userId:null,
      getUserInfo: false,
      refNum:0,
      userInfo: { username: '', avatar: '' }, //user info
      //router
      allRoutes: [] as RouterTypes,
      buttonCodes: [],
      filterAsyncRoutes: [],
      roles: [] as Array<string>,
      codes: [] as Array<number>,
      //keep-alive
      cachedViews: [] as Array<string>,
      cachedViewsDeep: [] as Array<string>,
      //other
      sidebar: { opened: true },
      //axios req collection
      axiosPromiseArr: [],
    }
  },
  persist: {
    storage: sessionStorage,
    enabled:true,

  },
  actions: {
    
    setBook(book:number){
      this.$patch((state:any) => {
          state.bookId = book
        })
    },
    setrefNum(){
        this.$patch((state:any)=>{
        state.refNum += 1
      })
    },
    clearRefNum(){
        this.$patch((state:any)=>{
        state.refNum = 0
      })
    },
    setToken(access:string) {
        this.$patch((state:any)=>{
        state.token = access
        setCookieToken(access)
      })
    },
    setRefresh(refresh:string){
        this.$patch((state:any)=>{
        state.refresh = refresh
        setCookieRefresh(refresh)
      })
    },
    setFilterAsyncRoutes(route:any) {
        this.$patch((state:any) => {
        state.filterAsyncRoutes = route
        state.allRoutes = routes.concat(routes)
      })
    },
    setUserInfo(userinfo:any) {
        this.$patch((state:any) => {
        state.roles = []
        state.codes = []
        state.getUserInfo = true
        state.userInfo.username = userinfo.username
        state.userInfo.avatar = userinfo.avatar
        console.log(state)
      })
    },
    resetState() {
        this.$patch((state:any) => {
        state.token = null //reset token
        state.refresh = null,
        state.roles = []
        state.codes = []
        //reset router
        state.allRoutes = []
        state.buttonCodes = []
        state.filterAsyncRoutes = []
        //reset userInfo
        state.userInfo.username = ''
        state.userInfo.avatar = ''
        state.getUserInfo = false
      })
    },
    resetStateAndToLogin() {
        this.resetState()
      nextTick(() => {
        router.push({ path: '/login' })
      })
    },
    setSidebarOpen(data:string) {
        this.$patch((state:any) => {
        state.sidebar.opened = data
      })
    },
    setToggleSideBar() {
        this.$patch((state:any) => {
        state.sidebar.opened = !state.sidebar.opened
      })
    },

    /*keepAlive缓存*/
    addCachedView(view:any) {
        this.$patch((state:any) => {
        if (state.cachedViews.includes(view)) return
        state.cachedViews.push(view)
      })
    },

    delCachedView(view:any) {
        this.$patch((state:any) => {
        const index = state.cachedViews.indexOf(view)
        index > -1 && state.cachedViews.splice(index, 1)
      })
    },
    /*third  keepAlive*/
    addCachedViewDeep(view:any) {
        this.$patch((state:any) => {
        if (state.cachedViewsDeep.includes(view)) return
        state.cachedViewsDeep.push(view)
      })
    },
    setCacheViewDeep(view:any) {
        this.$patch((state:any) => {
        const index = state.cachedViewsDeep.indexOf(view)
        index > -1 && state.cachedViewsDeep.splice(index, 1)
      })
    },
  }
})
