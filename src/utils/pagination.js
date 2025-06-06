// 管理分页获取列表
export const usePagination = () => {
  // 分页信息
  const pageInfo = ref({
    pageNum: 0,
    pageSize: 9
  })
  // 列表总长度
  const total = ref(-1)
  const totalPage = computed(() => Math.ceil(total.value / pageInfo.value.pageSize) || 0)
  // 禁用加载
  const disableLoad = computed(() => {
    return pageInfo.value.pageNum > 0 && pageInfo.value.pageNum >= totalPage.value
  })
  // 回调函数
  let callback = null
  // 加载效果
  const loading = ref(false)
  // 注册回调
  const registerCallback = newCallback => {
    const prevCallback = callback
    callback = newCallback
    // 注销清理
    return prevCallback
  }
  // 重置分页
  const resetPage = () => {
    pageInfo.value = {
      pageNum: 0,
      pageSize: 10
    }
  }
  // 下一页
  const nextPage = () => {
    if (total.value != -1 && pageInfo.value.pageNum >= totalPage.value) return
    pageInfo.value.pageNum++
    if (callback) callback()
  }
  // 上一页
  const prevPage = () => {
    if (pageInfo.value.pageNum <= 0) return
    pageInfo.value.pageNum--
    if (callback) callback()
  }

  return {
    pageInfo,
    total,
    loading,
    disableLoad,
    registerCallback,
    resetPage,
    nextPage,
    prevPage
  }
}
