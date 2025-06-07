<script setup>
import { getStatusBarHeight, getTitleBarHeight, getNavBarHeight } from '@/utils/system'

const { title } = defineProps({ title: String })

const goSearch = () => {
  uni.navigateTo({ url: '/pages/search/index' })
}
</script>

<template>
  <view class="nav-bar">
    <view class="container">
      <view class="status-bar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
      <view class="title-bar" :style="{ height: getTitleBarHeight() + 'px' }">
        <view class="title">{{ title || '壁纸' }}</view>
        <view class="search" @click="goSearch">
          <uni-icons type="search"></uni-icons>
          <text>搜索</text>
        </view>
      </view>
    </view>
    <view class="fill" :style="{ height: getNavBarHeight() + 'px' }"></view>
  </view>
</template>

<style scoped lang="scss">
.nav-bar {
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(20rpx);

    .title-bar {
      padding-left: 30rpx;
      display: flex;
      align-items: center;

      .title {
        font-size: 45rpx;
        font-weight: 700;
        color: $wallpaper-text-color-1;
      }

      .search {
        margin-left: 30rpx;
        padding: 0 20rpx;
        width: 220rpx;
        height: 50rpx;
        display: flex;
        align-items: center;
        font-size: 28rpx;
        color: $wallpaper-text-color-3;
        background-color: rgba(255, 255, 255, 0.4);
        border: 1px solid #ffffff;
        border-radius: 25rpx;

        :deep(.uni-icons) {
          margin-right: 10rpx;
          font-size: 35rpx !important;
          color: $wallpaper-text-color-3 !important;
        }
      }
    }
  }
}
</style>
