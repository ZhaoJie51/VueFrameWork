import {get, post} from '@/utils/axios'

export const newsList = p => get('/api/newsList', p)
