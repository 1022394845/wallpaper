<script setup></script>

<template>
  <view class="notice wrapper">
    <view class="title">标题</view>
    <view class="info">
      <view class="item">管理员</view>
      <view class="item">
        <uni-dateformat :date="Date.now()" format="yyyy-MM-dd hh:mm:ss"></uni-dateformat>
      </view>
    </view>
    <view class="content">公告内容</view>
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
