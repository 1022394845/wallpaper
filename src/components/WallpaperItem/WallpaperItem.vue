<script setup>
const { name, date } = defineProps({ name: String, date: String })
</script>

<template>
  <view class="wallpaper-item">
    <navigator class="container" url="">
      <image class="image" src="@/assets/wallpaper/classify1.jpg" mode="scaleToFill" />
      <view class="update">{{ date || '不久' }}前更新</view>
      <view class="name">{{ name || '默认专题' }}</view>
    </navigator>
  </view>
</template>

<style lang="scss" scoped>
.wallpaper-item {
  width: 100%;
  height: 350rpx;
  border-radius: 10rpx;
  overflow: hidden;

  .container {
    position: relative;
    width: 100%;
    height: 100%;

    .image {
      width: 100%;
      height: 100%;
    }

    .update {
      position: absolute;
      left: 0;
      top: 0;
      padding: 10rpx;
      width: fit-content;
      height: 30rpx;
      display: flex;
      align-items: center;
      font-size: 18rpx;
      color: #ffffff;
      background-color: rgba(250, 129, 90, 0.7);
      backdrop-filter: blur(20rpx);
      border-radius: 0 0 20rpx 0;
    }

    .name {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70rpx;
      line-height: 70rpx;
      font-size: 30rpx;
      color: #ffffff;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(20rpx);
    }
  }
}
</style>
