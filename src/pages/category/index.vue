<script setup>
import { getCategoryListAPI } from '@/api/wallpaper'

// 分类列表
const categoryList = ref([])
const getCategoryList = async () => {
  const { data } = await getCategoryListAPI()
  categoryList.value = data
}
onLoad(() => {
  getCategoryList()
})
</script>

<template>
  <view class="category wrapper">
    <NavBar title="推荐" />
    <view class="list">
      <CategoryItem v-for="item in categoryList" :key="item._id" :detail="item" />
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
