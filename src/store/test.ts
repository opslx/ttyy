import { defineStore } from 'pinia'
//定义pinia名字useAppStore  use->前缀  App-> 文件名   Store固定 defineStore('app'） app->文件名
export const uesBasicStore = defineStore('basic', {
   state: () => ({
      name: 'test data',
      age:18,
      phone:13302254692
  }),
  actions: {
    setab(){
        
    }
  }
})