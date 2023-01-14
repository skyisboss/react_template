import http from '@/utils/http'
import { LoginParams } from './typed'

// 获取客户端版本信息
export const getStatus = () => {
  return http.get('https://httpbin.org/anything')
}

// 登陆
export const login = (params: LoginParams) => {
  return http.post('/login', params)
}
