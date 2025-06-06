// 网络请求
const baseURL = 'https://tea.qingnian8.com/api/bizhi'
// const baseURL = '/bizhi' // 基地址
const timeout = 10000 // 连接超时上限

const request = params => {
  const { url, method = 'GET', data = {} } = params
  const header = {
    'Content-Type': 'application/json',
    'access-key': '1022394845'
  }
  if (method === 'POST') header['Content-Type'] = 'multipart/form-data'

  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL + url,
      method,
      header,
      data,
      timeout,
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
