<script setup>
const { icon, title, number } = defineProps({ icon: String, title: String, number: Number })
</script>

<template>
  <view class="user-operation">
    <uni-icons :type="icon || 'info'" size="20" color="#28b389"></uni-icons>
    <view class="title">{{ title }}</view>
    <view v-if="number" class="number">{{ number }}</view>
    <uni-icons type="forward" size="15" color="#aaaaaa"></uni-icons>
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
  border-bottom: 1px solid #eeeeee;

  .title {
    flex: 1;
    margin-left: 20rpx;
    color: #666666;
  }

  .number {
    font-size: 28rpx;
    color: #aaaaaa;
  }
}
</style>
