<script setup>
const { title } = defineProps({ title: String })
</script>

<template>
  <view class="comment-title">
    <view class="title">{{ title || '标题' }}</view>
    <view class="custom">
      <slot name="custom"></slot>
    </view>
  </view>
</template>

<style scoped lang="scss">
.comment-title {
  margin-top: 60rpx;
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
  }
}
</style>
