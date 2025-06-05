<script setup>
import { getNoticeDetailAPI } from '@/api/notice'

const detail = ref({})
const getNoticeDetail = async id => {
  const { data } = await getNoticeDetailAPI(id)
  detail.value = data
}

onLoad(async e => {
  getNoticeDetail(e.id)
})
</script>

<template>
  <view class="notice wrapper">
    <view class="title">{{ detail.title }}</view>
    <view class="info">
      <view class="item">{{ detail.author }}</view>
      <view class="item">
        <uni-dateformat :date="detail.publish_date" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
      </view>
    </view>
    <view class="content" v-html="detail.content"></view>
  </view>
</template>

<style scoped lang="scss">
.notice {
  .title {
    font-size: 48rpx;
    color: $wallpaper-text-color-1;
  }

  .info {
    margin-top: 20rpx;
    display: flex;
    align-items: center;
    font-size: 30rpx;
    color: $wallpaper-text-color-3;

    .item {
      margin-right: 20rpx;
    }
  }

  .content {
    margin-top: 40rpx;
  }
}
</style>
