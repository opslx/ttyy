import axios from 'axios'
import { ElMessage, ElMessageBox,ElNotification } from 'element-plus'
import {resetToken} from "@/api/user";
import { useBasicStore } from '@/store/basic'
import {getCookieRefresh,removeCookieRefresh,removeCookieToken} from "@/utils/cookie";
import {useRouter} from 'vue-router'
//使用axios.create()创建一个axios请求实例
const service = axios.create()

//请求前拦截
service.interceptors.request.use(
  (req) => {
    const { token, axiosPromiseArr } = useBasicStore()
    //axiosPromiseArr收集请求地址,用于取消请求
    req.cancelToken = new axios.CancelToken((cancel) => {
      axiosPromiseArr.push({
        url: req.url,
        cancel
      })
    })
    //设置token到header
    // @ts-ignore
    //   req.headers['AUTHORIZE_TOKEN'] = token
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // @ts-ignore
        req.headers['Authorization'] = "Bearer " + token
    }
    
    //如果req.method给get 请求参数设置为 ?name=xxx
    if ('get'.includes(req.method?.toLowerCase() as string)) req.params = req.data
    return req
  },
  (err) => {
    //发送请求失败
    Promise.reject(err)
  }
)
//请求后拦截
service.interceptors.response.use(

  (res) => {
    switch (res.status){
        case 200:
            return res
        case 201:
              ElNotification({
                title: 'Success',
                message: 'Success',
                type: 'success',
              })
            return res
        default:
            ElMessageBox.confirm('请重新登录', {
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              useBasicStore().resetStateAndToLogin()
            })
            return Promise.reject(res)

    }
  },
  //响应报错
  (err) => {
    switch (err.response.status) {
        case 401:
          useBasicStore().$reset()
          useBasicStore().resetState()
          removeCookieRefresh()
          removeCookieToken()
          ElMessageBox.confirm('请重新登录', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            useBasicStore().resetStateAndToLogin()
          })
    }
    return Promise.reject(err)
  }
)


//导出service实例给页面调用 , config->页面的配置
export default function request(config:any) {
  return service({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 8000,
    ...config
  })
}
