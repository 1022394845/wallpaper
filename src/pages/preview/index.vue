<script setup>
import InfoPopup from './componenets/InfoPopup.vue'
import RatePopup from './componenets/RatePopup.vue'
import { getStatusBarHeight } from '@/utils/system'

// 遮罩层显示
const maskVisible = ref(true)
const toggleMaskVisible = () => {
  maskVisible.value = !maskVisible.value
}

// popup
const infoPopup = ref()
const ratePopup = ref()

const openInfoPopup = () => {
  infoPopup.value.open()
}
const openRatePopup = () => {
  ratePopup.value.open()
}

const goBack = () => {
  uni.navigateBack()
}
</script>

<template>
  <view class="preview">
    <swiper circular class="container">
      <swiper-item class="item" v-for="(item, index) in 5" :key="index">
        <image
          class="image"
          src="@/assets/wallpaper/preview1.jpg"
          mode="scaleToFill"
          @click="toggleMaskVisible"
        />
      </swiper-item>
    </swiper>
    <!-- 信息遮罩 -->
    <view class="mask" v-show="maskVisible">
      <view class="goback" :style="{ top: getStatusBarHeight() + 'px' }" @click="goBack">
        <uni-icons type="back"></uni-icons>
      </view>
      <view class="index">1/1</view>
      <view class="time">
        <uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
      </view>
      <view class="date">
        <uni-dateformat :date="Date.now()" format="MM月dd日"></uni-dateformat>
      </view>
      <view class="footer">
        <view class="item" @click="openInfoPopup">
          <uni-icons class="icon" type="info"></uni-icons>
          <view class="text">信息</view>
        </view>
        <view class="item" @click="openRatePopup">
          <uni-icons class="icon" type="star"></uni-icons>
          <view class="text">评分</view>
        </view>
        <view class="item">
          <uni-icons class="icon download" type="download"></uni-icons>
          <view class="text">下载</view>
        </view>
      </view>
    </view>
    <!-- 信息popup -->
    <InfoPopup ref="infoPopup" />
    <!-- 评分popup -->
    <RatePopup ref="ratePopup" />
  </view>
</template>

<style scoped lang="scss">
.preview {
  position: relative;
  width: 100vw;
  height: 100vh;

  .container {
    width: 100%;
    height: 100%;

    .item {
      width: 100%;
      height: 100%;
    }
  }

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    padding: 150rpx 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: $wallpaper-text-color-5;
    text-align: center;
    pointer-events: none;

    .goback {
      position: absolute;
      top: 0;
      left: 30rpx;
      margin-top: 10rpx;
      width: 70rpx;
      height: 70rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10rpx);
      border: 1px solid $wallpaper-border-color;
      border-radius: 50%;
      pointer-events: all;

      :deep(.uni-icons) {
        font-size: 42rpx !important;
        color: $wallpaper-text-color-5 !important;
      }
    }

    .index {
      margin: 0 auto;
      padding: 0 28rpx;
      width: fit-content;
      height: 40rpx;
      line-height: 40rpx;
      font-size: 28rpx;
      border-radius: 20rpx;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10rpx);
    }

    .time {
      margin: 30rpx auto 0;
      width: fit-content;
      font-size: 140rpx;
      text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
    }

    .date {
      flex: 1;
      margin: 20rpx auto 0;
      width: fit-content;
      font-size: 34rpx;
      text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
    }

    .footer {
      margin: 0 auto;
      padding: 0 70rpx;
      width: 490rpx;
      height: 120rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32rpx;
      color: $wallpaper-text-color-2;
      border-radius: 60rpx;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20rpx);
      pointer-events: all;

      :deep(.uni-icons) {
        font-size: 45rpx !important;
      }

      :deep(.download .uni-icons),
      :deep(.download.uni-icons) {
        font-size: 38rpx !important;
      }
    }
  }
}
</style>
