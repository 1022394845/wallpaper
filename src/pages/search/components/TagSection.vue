<script setup>
const { title, tagList = [] } = defineProps({ title: String, tagList: Array })

const emit = defineEmits(['search'])
const onSearch = tag => {
  emit('search', tag)
}
</script>

<template>
  <view class="tag-section">
    <view class="title-bar">
      <view class="title">{{ title || '搜索列表' }}</view>
      <slot></slot>
    </view>
    <view class="tag-list">
      <view class="tag" v-for="(tag, index) in tagList" :key="index" @click="onSearch(tag)">
        {{ tag }}
      </view>
    </view>
    <view class="empty" v-if="!tagList.length">暂无数据</view>
  </view>
</template>

<style scoped lang="scss">
.tag-section {
  margin-top: 60rpx;

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32rpx;
    color: $wallpaper-text-color-2;

    :deep(.uni-icons) {
      font-size: 38rpx !important;
      color: $wallpaper-text-color-2 !important;
    }
  }

  .tag-list {
    margin-top: 20rpx;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .tag {
      flex-shrink: 0;
      margin: 0 10rpx 20rpx;
      padding: 0 30rpx;
      height: 60rpx;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 28rpx;
      color: $wallpaper-text-color-2;
      background-color: #f4f4f4;
      border-radius: 30rpx;
    }
  }

  .empty {
    margin: 20rpx auto 0;
    width: fit-content;
    font-size: 28rpx;
    color: $wallpaper-text-color-2;
  }
}
</style>
