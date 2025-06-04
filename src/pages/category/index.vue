<script setup></script>

<template>
  <view class="category wrapper">
    <NavBar title="推荐" />
    <view class="list">
      <CategoryItem v-for="(item, index) in 12" :key="index" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.category {
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15rpx;
  }
}
</style>
