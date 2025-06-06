<script setup>
import { getCategoryListAPI } from '@/api/wallpaper'
import { usePagination } from '@/utils/pagination'

const { pageInfo, total, registerCallback, nextPage, getLoadTime } = usePagination()

// 分类列表
const categoryList = ref([])
const loading = ref(true)
const loadCategoryList = async () => {
  loading.value = true
  const { total: totalNum, data } = await getCategoryListAPI(pageInfo.value)
  total.value = totalNum
  categoryList.value.push(...data)
  loading.value = false
}
onLoad(() => {
  registerCallback(loadCategoryList)
  const loadTime = getLoadTime(350 * 3)
  for (let i = 0; i < loadTime; i++) nextPage()
})

// 加载更多
onReachBottom(() => {
  nextPage()
})

// #ifndef H5
// 分享小程序
onShareAppMessage(() => {
  return {
    title: '精选壁纸',
    path: '/pages/category/index'
  }
})

// 分享朋友圈
onShareTimeline(() => {
  return {
    title: '精选壁纸'
  }
})
// #endif
</script>

<template>
  <view class="category wrapper">
    <NavBar title="推荐" />
    <view class="list">
      <CategoryItem v-for="item in categoryList" :key="item._id" :detail="item" />
    </view>
    <view class="loading-more" v-if="loading">
      <uni-load-more status="loading"></uni-load-more>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.category {
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
  }
}
</style>
