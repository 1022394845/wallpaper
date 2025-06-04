<script setup>
const { icon, title, number, url, openType } = defineProps({
  icon: String,
  title: String,
  number: Number,
  url: String,
  openType: String
})

const goNav = () => {
  if (!url) return
  switch (openType) {
    case 'navigate':
      uni.navigateTo({ url })
      break
    case 'switchTab':
      uni.switchTab({ url })
      break
    default:
      break
  }
}
</script>

<template>
  <view class="user-operation" @click="goNav">
    <uni-icons class="item-icon" :type="icon || 'info'"></uni-icons>
    <view class="title">{{ title }}</view>
    <view v-if="number" class="number">{{ number }}</view>
    <uni-icons class="forward-icon" type="forward"></uni-icons>
    <slot></slot>
  </view>
</template>

<style scoped lang="scss">
.user-operation {
  position: relative;
  padding: 0 30rpx;
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $wallpaper-border-color;

  .title {
    flex: 1;
    margin-left: 20rpx;
    color: $wallpaper-text-color-2;
  }

  .number {
    font-size: 28rpx;
    color: $wallpaper-text-color-3;
  }
}
</style>
