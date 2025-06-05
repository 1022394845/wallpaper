<script setup>
import { getCategoryDetailAPI } from '@/api/wallpaper'
import { usePagination } from '@/utils/pagination'

const { pageInfo, total, registerCallback, nextPage } = usePagination()

const classid = ref(null)
const classList = ref([])
const loadClassList = async () => {
  const { total: totalNum, data } = await getCategoryDetailAPI(classid.value, pageInfo.value)
  total.value = totalNum
  classList.value.push(...data)
  uni.setStorageSync('wallpaper_ClassList', classList.value)
}
onLoad(e => {
  uni.setNavigationBarTitle({ title: e.name || '分类详情' })
  classid.value = e.classid
  registerCallback(loadClassList)
  nextPage()
})

// 加载更多
onReachBottom(() => {
  nextPage()
})

const goPreview = id => {
  uni.navigateTo({ url: `/pages/preview/index?id=${id}` })
}
</script>

<template>
  <view class="class-list wrapper">
    <view v-for="item in classList" :key="item._id" class="item" @click="goPreview(item._id)">
      <image class="image" :src="item.smallPicurl" mode="scaleToFill" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.class-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rpx;

  .item {
    height: 440rpx;
  }
}
</style>
