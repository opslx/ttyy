/// <reference types="vite/client" />
declare module '*.vue' {  
    import { DefineComponent } from 'vue'  
    const component: DefineComponent<{}, {}, any>  
    export default component  
  }

  declare module  'js-cookie'
  
  declare module  'pinia'

  declare module 'pinia-plugin-persistedstate'