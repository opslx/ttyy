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

export function getBookWord (data:object) {
	return request({
		method: "GET", 
		url: `/book/word/`,
		data:data
	})
}

export function getWord (wordId:number,data:object) {
	return request({
		method: "GET", 
		url: `/book/word/${wordId}/`,
		data:data
	})
}
