import request from '@/utils/request'

// 获取公告列表
export const getNoticeListAPI = () => request.get('/wallNewsList')

// 获取公告详情
export const getNoticeDetailAPI = id => request.get('/wallNewsDetail', { params: { id } })
