<script setup>
const { title } = defineProps({ title: String })
</script>

<template>
  <view class="common-title">
    <view class="title">{{ title || '标题' }}</view>
    <view class="custom">
      <slot name="custom"></slot>
    </view>
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

  .custom {
    display: flex;
    align-items: center;
    font-size: 30rpx;
    color: #a9a9a9;
  }
}
</style>
