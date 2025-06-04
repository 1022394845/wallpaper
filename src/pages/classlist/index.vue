<script setup>
const gopreview = url => {
  uni.navigateTo({ url })
}
</script>

<template>
  <view class="classlist wrapper">
    <view
      v-for="(item, index) in 10"
      :key="index"
      class="item"
      @click="gopreview('/pages/preview/index')"
    >
      <image class="image" src="@/assets/wallpaper/preview1.jpg" mode="scaleToFill" />
    </view>
  </view>
</template>

<style scoped lang="scss">
.classlist {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rpx;

  .item {
    height: 440rpx;
  }
}
</style>
