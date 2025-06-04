<script setup></script>

<template>
  <view class="classlist wrapper">
    <view class="container">
      <navigator v-for="(item, index) in 10" :key="index" class="item" url="">
        <image class="image" src="@/assets/wallpaper/preview1.jpg" mode="scaleToFill" />
      </navigator>
    </view>
  </view>
</template>

<style scoped lang="scss">
.classlist {
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rpx;

    .item {
      height: 440rpx;
    }
  }
}
</style>
