<script setup>
import { getUserRecordAPI } from '@/api/user'
import { getCategoryDetailAPI, getSearchListAPI } from '@/api/wallpaper'
import { usePagination } from '@/utils/pagination'
import { runSerial } from '@/utils/serial'

const { pageInfo, total, registerCallback, nextPage, getLoadTime } = usePagination()

const classid = ref(null)
const name = ref('默认分类')
const type = ref(null) // 个人下载/评分
const keyword = ref(null) // 搜索关键词
const classList = ref([])
const loading = ref(true)
const loadClassList = async () => {
  loading.value = true
  try {
    if (type.value) {
      // 用户下载/评分
      const { data } = await getUserRecordAPI(type.value, pageInfo.value)
      classList.value.push(...data)
      // 该接口没有返回total
      if (data.length === 0 || data.length < pageInfo.value.pageSize) {
        total.value = classList.value.length
      }
    } else if (keyword.value) {
      // 搜索
      const { total: totalNum, data } = await getSearchListAPI(keyword.value, pageInfo.value)
      total.value = totalNum
      classList.value.push(...data)
    } else {
      // 普通分类
      const { total: totalNum, data } = await getCategoryDetailAPI(classid.value, pageInfo.value)
      total.value = totalNum
      classList.value.push(...data)
    }
  } finally {
    loading.value = false
  }
  uni.setStorageSync('wallpaper_ClassList', classList.value)
}

onLoad(async e => {
  uni.setNavigationBarTitle({ title: e.name || '分类详情' })
  classid.value = e.classid
  name.value = e.name
  type.value = e.type
  keyword.value = e.keyword
  registerCallback(loadClassList)
  const loadTime = getLoadTime(440 * 3)
  runSerial(nextPage, loadTime)
})

// 加载更多
onReachBottom(() => {
  nextPage()
})

const goPreview = id => {
  uni.navigateTo({ url: `/pages/preview/index?id=${id}` })
}

// 销毁页面后清除缓存
onUnload(() => {
  uni.removeStorageSync('wallpaper_ClassList')
})

// #ifndef H5
// 分享小程序
onShareAppMessage(() => {
  return {
    title: `精选壁纸-${name.value}`,
    path: `/pages/classlist/index?classid=${classid.value}&name=${name.value}`
  }
})

// 分享朋友圈
onShareTimeline(() => {
  return {
    title: `精选壁纸-${name.value}`
  }
})
// #endif
</script>

<template>
  <view class="class-list wrapper">
    <view class="container">
      <view v-for="item in classList" :key="item._id" class="item" @click="goPreview(item._id)">
        <image class="image" :src="item.smallPicurl" mode="scaleToFill" />
      </view>
    </view>
    <view class="loading-more" v-if="loading">
      <uni-load-more status="loading"></uni-load-more>
    </view>
    <view class="empty" v-if="!classList.length && !loading">暂无数据</view>
  </view>
</template>

<style scoped lang="scss">
.class-list {
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rpx;

    .item {
      height: 440rpx;
    }
  }

  .empty {
    margin: 30rpx auto;
    width: fit-content;
    font-size: 32rpx;
    color: $wallpaper-text-color-2;
  }
}
</style>
