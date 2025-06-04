<script setup>
import InfoPopup from './componenets/InfoPopup.vue'

// 遮罩层显示
const maskVisible = ref(true)
const toggleMaskVisible = () => {
  maskVisible.value = !maskVisible.value
}

// popup
const infoPopup = ref()
const openInfoPopup = () => {
  infoPopup.value.open()
}
</script>

<template>
  <view class="preview">
    <swiper circular>
      <swiper-item v-for="(item, index) in 5" :key="index">
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
      <view class="goback"></view>
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
        <view class="item">
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
  </view>
</template>

<style scoped lang="scss">
.preview {
  position: relative;
  width: 100vw;
  height: 100vh;

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
      color: $wallpaper-text-color-2;
      border-radius: 60rpx;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20rpx);
      pointer-events: all;

      :deep(.icon) {
        font-size: 45rpx !important;

        &.download {
          font-size: 40rpx !important;
        }
      }
    }
  }
}
</style>
