import request from '@/utils/request'

export function userLogin (data:any) {
	return request({
		method: "POST", 
		url: '/user/login/',
		data: data
	})
}

export function userSign (data:any) {
	return request({
		method: "POST", 
		url: '/user/sign/',
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

export function getUserCalendar () {
  return request({
    method: "GET", 
    url: '/user/user_calendar/',
  })
}

export function getUserCollect () {
  return request({
    method: "GET", 
    url: '/user/user_collect/',
  })
}

export function getUserCollectWord (userWordId:any) {
  return request({
    method: "GET", 
    url: `/user/user_collect/${userWordId}/`,
  })
}

export function updateUserCollect (wordId:any,data:object) {
  return request({
    method: "PUT", 
    url: `/user/user_collect/${wordId}/`,
    data:data
  })
}


export function updataUserInfo (userId:number,data:any) {
	return request({
		method: "PUT", 
		url: `/user/user/${userId}/`,
		data: data
	})
}

export function updataUserAvatar (data:any) {
	return request({
		method: "POST", 
		url: `/user/upload/`,
		data: data
	})
}
