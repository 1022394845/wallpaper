<script setup>
const { detail } = defineProps({ detail: Object })

const goDetail = () => {
  uni.navigateTo({ url: `/pages/classlist/index?classid=${detail._id}&name=${detail.name}` })
}
</script>

<template>
  <view class="category-item">
    <image class="image" :src="detail.picurl" mode="scaleToFill" @click="goDetail" />
    <view class="update">
      <uni-dateformat :date="detail.updateTime" :threshold="[3e5]"></uni-dateformat>
      更新
    </view>
    <view class="name">{{ detail.name || '默认专题' }}</view>
  </view>
</template>

<style lang="scss" scoped>
.category-item {
  position: relative;
  width: 100%;
  height: 350rpx;
  border-radius: 10rpx;
  overflow: hidden;

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
</style>
