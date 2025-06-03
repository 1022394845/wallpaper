<script setup>
const { title } = defineProps({ title: String })
</script>

<template>
  <view class="common-title">
    <view class="title">{{ title || '标题' }}</view>
    <slot></slot>
  </view>
</template>

<style scoped lang="scss">
.common-title {
  margin: 60rpx 0 30rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 40rpx;
    font-weight: 500;
  }
}
</style>
