// 网络请求
// ---DEVELOP---
// import { SYSTEM_INFO } from './system'

// // web与小程序代理适配
// const HOST = 'https://tea.qingnian8.com/api/bizhi' // 主机地址
// const API_HOST = SYSTEM_INFO.uniPlatform === 'web' ? '' : HOST // api服务器
// const API_PROXY = SYSTEM_INFO.uniPlatform === 'web' ? '/api' : '' // api服务代理路径
// const packApiUrl = (url = '') => {
//   if (url.slice(0, 4) === 'http') return url // 已经是完整链接
//   return `${API_HOST}${API_PROXY}${url}` // 组装代理地址
// }

const BASE_URL = 'https://tea.qingnian8.com/api/bizhi'

const request = params => {
  const { url, method = 'GET', data = {} } = params
  const header = {
    'Content-Type': 'application/json',
    'access-key': '1022394845'
  }
  if (method === 'POST') header['Content-Type'] = 'multipart/form-data'

  return new Promise((resolve, reject) => {
    uni.request({
      // url: packApiUrl(url),
      url: BASE_URL + url,
      method,
      header,
      data,
      timeout: 10000, // 连接超时上限
      success: response => {
        if (response.data?.errCode === 0) resolve(response.data)
        else {
          if (response.data?.errCode === 4000) {
            uni.showModal({
              title: '错误提示',
              content: response.data?.errMsg || '未知错误',
              showCancel: false,
              confirmColor: '#28b389'
            })
          } else {
            uni.showToast({
              title: response.data?.errMsg || '未知错误',
              icon: 'none'
            })
          }
          reject(response.data)
        }
      },
      fail: err => {
        uni.showToast({
          title: '未知异常',
          icon: 'error'
        })
        reject(err)
      }
    })
  })
}

export default request
