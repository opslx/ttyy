import request from '@/utils/request'

export function setUser (data:any) {
	return request({
		method: "POST", 
		url: '/user/user/',
		data: data
	})
}

export async function  resetToken (data:any){
    return await request({
      url: '/users/token/refresh',
      method: 'post',
      data
    })
  }


export function getUserInfo () {
  return request({
    method: "GET", 
    url: '/user/user/',
  })
}
  