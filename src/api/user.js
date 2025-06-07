import request from '@/utils/request'

// 获取个人信息
export const getUserInfoAPI = () => request({ url: '/userInfo' })

// 获取个人下载/评分记录
export const getUserRecordAPI = (type, pageInfo) =>
  request({ url: '/userWallList', data: { type, pageInfo } })
