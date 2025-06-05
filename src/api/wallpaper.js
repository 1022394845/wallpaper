import request from '@/utils/request'

// 获取首页Banner
export const getBannerListAPI = () => request.get('/homeBanner')

// 获取每日推荐
export const getDayRecommendAPI = () => request.get('/randomWall')

// 获取分类列表
export const getCategoryListAPI = () => request.get('/classify')

// 获取分类详情列表
export const getCategoryDetailAPI = (classid, pageInfo) =>
  request.get('/wallList', { params: { classid, ...pageInfo } })

// 壁纸评分
export const setupScoreAPI = (classid, wallId, userScore) =>
  request.get('/setupScore', { params: { classid, wallId, userScore } })
