<script setup>
const popup = ref()
const open = () => {
  rateValue.value = 0
  popup.value.open()
}
const close = () => {
  popup.value.close()
}
defineExpose({ open, close })

const rateValue = ref(0)

const submit = () => {
  close()
}
</script>

<template>
  <uni-popup ref="popup" type="center">
    <view class="popup-container">
      <view class="header">
        <view class="title">壁纸评分</view>
        <uni-icons class="close" type="closeempty" @click="close"></uni-icons>
      </view>
      <view class="content">
        <uni-rate v-model="rateValue" />
      </view>
      <button type="default" plain class="submit-btn" :disabled="!rateValue" @click="submit">
        确认评分
      </button>
    </view>
  </uni-popup>
</template>

<style scoped lang="scss">
.popup-container {
  padding: 30rpx;
  width: 530rpx;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 30rpx;
  overflow: hidden;

  .header {
    position: relative;
    text-align: center;
    font-size: 28rpx;
    color: $wallpaper-text-color-2;

    :deep(.close) {
      position: absolute;
      right: 10rpx;
      top: 50%;
      transform: translateY(-50%);
      font-size: 28rpx !important;
      color: $wallpaper-text-color-2 !important;
    }
  }

  .content {
    margin: 40rpx auto;
    width: fit-content;

    :deep(.uni-rate .uni-icons) {
      font-size: 60rpx !important;
    }
  }

  .submit-btn {
    width: fit-content;
    font-size: 26rpx;
    border-radius: 10rpx;
  }
}
</style>
