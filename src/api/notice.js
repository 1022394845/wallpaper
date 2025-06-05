import request from '@/utils/request'

// 获取公告列表
export const getNoticeListAPI = () => request({ url: '/wallNewsList' })

// 获取公告详情
export const getNoticeDetailAPI = id => request({ url: '/wallNewsDetail', data: { id } })
