import {get, post} from '@/utils/axios'
let {baseUrl} = require('@/config')
export const api1 = p => get(`${baseUrl}/api/newsList`, p)
export const api2 = p2 => post(`${baseUrl}/api/newsList2`, p2)

export const proxy_list = p2 => get('/proxy_list', p2)