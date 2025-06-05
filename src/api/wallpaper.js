import request from '@/utils/request'

// 获取首页Banner
export const getBannerListAPI = () => request({ url: '/homeBanner' })

// 获取每日推荐
export const getDayRecommendAPI = () => request({ url: '/randomWall' })

// 获取分类列表
export const getCategoryListAPI = () => request({ url: '/classify' })

// 获取分类详情列表
export const getCategoryDetailAPI = (classid, pageInfo) =>
  request({
    url: '/wallList',
    data: { classid, ...pageInfo }
  })

// 壁纸评分
export const setupScoreAPI = (classid, wallId, userScore) =>
  request({ url: '/setupScore', data: { classid, wallId, userScore } })

// 获取单张壁纸详情
export const getWallpaperDetailAPI = id => request({ url: '/detailWall', data: { id } })
