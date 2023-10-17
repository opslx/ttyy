import request from '@/utils/request'

export function getAllBook () {
	return request({
		method: "GET", 
		url: '/book/book/',
	})
}



export function getBook (data:any) {
	return request({
		method: "GET", 
		url: `/book/book/${data}/`,
	})
}
