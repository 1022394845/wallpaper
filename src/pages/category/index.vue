<script setup></script>

<template>
  <view class="category wrapper">
    <WallpaperItem v-for="(item, index) in 12" :key="index" />
  </view>
</template>

<style lang="scss" scoped>
.category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rpx;
}
</style>
