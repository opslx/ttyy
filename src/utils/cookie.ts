import Cookies from 'js-cookie'

const TokenKey = 'Token'
const RefreshKey = 'Refresh'

export function getCookieToken() {
  return Cookies.get(TokenKey)
}

export function setCookieToken(token:any) {
  return Cookies.set(TokenKey, token)
}

export function removeCookieToken() {
  return Cookies.remove(TokenKey)
}

export function getCookieRefresh() {
  return Cookies.get(RefreshKey)
}

export function setCookieRefresh(refresh:any) {
  return Cookies.set(RefreshKey, refresh)
}

export function removeCookieRefresh() {
  return Cookies.remove(RefreshKey)
}
