<script setup>
const { icon, title, number } = defineProps({ icon: String, title: String, number: Number })
</script>

<template>
  <view class="user-operation">
    <uni-icons class="item-icon" :type="icon || 'info'" size="20"></uni-icons>
    <view class="title">{{ title }}</view>
    <view v-if="number" class="number">{{ number }}</view>
    <uni-icons class="forward-icon" type="forward" size="15"></uni-icons>
    <slot></slot>
  </view>
</template>

<style lang="scss" scoped>
.user-operation {
  position: relative;
  padding: 0 30rpx;
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $wallpaper-border-color;

  :deep(.item-icon) {
    color: $wallpaper-main-color !important;
  }

  :deep(.forward-icon) {
    color: $wallpaper-text-color-3 !important;
  }

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
