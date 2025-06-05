import axios from 'axios'

const baseURL = 'https://tea.qingnian8.com/api/bizhi' // 基地址

const request = axios.create({
  baseURL,
  timeout: 10000, // 连接超时时间
  headers: {
    'Content-Type': 'application/json',
    'access-key': '1022394845'
  }
})

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    // 发送请求之前
    return config
  },
  error => {
    // 对请求错误处理
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    // 摘取核心响应数据
    if (response.data?.errCode === 0) {
      return response.data
    }
    // 处理业务失败
    uni.showModal({
      title: '发生错误',
      content: response.data?.errMsg || '服务异常',
      showCancel: false,
      confirmColor: '#28b389'
    })
    return Promise.reject(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
export { baseURL }
