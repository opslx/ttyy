import request from '@/utils/request'

export function getAllBook () {
	return request({
		method: "GET", 
		url: '/book/book/',
	})
}



export function getBook (bookId:any) {
	return request({
		method: "GET", 
		url: `/book/book/${bookId}/`,
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

export function getTagBook(data:object) {
	return request({
		method: "GET", 
		url: `/book/book/`,
		data:data
	})
}

export function searchWord (data:object) {
	return request({
		method: "GET", 
		url: `/book/word_search/`,
		data:data
	})
}