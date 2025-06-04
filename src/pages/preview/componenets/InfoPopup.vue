<script setup>
const popup = ref()
const open = () => {
  popup.value.open()
}
const close = () => {
  popup.value.close()
}
defineExpose({ open, close })
</script>

<template>
  <uni-popup ref="popup" type="bottom">
    <view class="popup-container">
      <view class="header">
        <view class="title">壁纸信息</view>
        <uni-icons class="close" type="closeempty" @click="close"></uni-icons>
      </view>
      <scroll-view scroll-y class="content">
        <view class="item">
          <view class="label">壁纸ID</view>
          <text class="detail" selectable>fn234jn2kcdjncdksj</text>
        </view>
        <view class="item">
          <view class="label">发布者</view>
          <text class="detail" selectable>酒笙清梅</text>
        </view>
        <view class="item">
          <view class="label">评分</view>
          <uni-rate :value="5" readonly />
        </view>
        <view class="item abstract">
          <view class="label">摘要</view>
          <text class="detail" selectable>
            这是一张精美的壁纸，这是一张精美的壁纸，这是一张精美的壁纸，这是一张精美的壁纸，这是一张精美的壁纸，这是一张精美的壁纸。
          </text>
        </view>
        <view class="item">
          <view class="label">标签</view>
          <view class="tag-list">
            <view class="tag" v-for="(item, index) in 3" :key="index">标签</view>
          </view>
        </view>
        <view class="copyright">
          声明：本壁纸来自网络收集或用户投稿，非商业使用，仅供免费学习交流。若侵犯了您的权益，请联系客服或平台邮箱：
          <text selectable>1022394845@qq.com</text>
          删除。
        </view>
      </scroll-view>
    </view>
  </uni-popup>
</template>

<style scoped lang="scss">
.popup-container {
  padding: 30rpx;
  height: fit-content;
  background-color: #ffffff;
  border-radius: 30rpx 30rpx 0 0;
  overflow: hidden;

  .header {
    position: relative;
    text-align: center;
    font-size: 32rpx;
    color: $wallpaper-text-color-2;

    :deep(.close) {
      position: absolute;
      right: 10rpx;
      top: 50%;
      transform: translateY(-50%);
      font-size: 32rpx !important;
      color: $wallpaper-text-color-2 !important;
    }
  }

  .content {
    margin-top: 50rpx;
    max-height: 60vh;

    .item {
      display: flex;
      align-items: center;
      margin-bottom: 40rpx;

      .label {
        flex-shrink: 0;
        margin-right: 30rpx;
        width: 100rpx;
        text-align: justify;
        text-align-last: justify;
        color: $wallpaper-text-color-2;
      }

      &.abstract {
        align-items: flex-start;
      }

      .tag-list {
        display: flex;
        align-items: center;

        .tag {
          margin: 0 10rpx;
          padding: 0 30rpx;
          height: 40rpx;
          line-height: 40rpx;
          font-size: 22rpx;
          color: $wallpaper-main-color;
          border: 1px solid $wallpaper-main-color;
          border-radius: 20rpx;
        }
      }
    }

    .copyright {
      padding: 20rpx;
      font-size: 28rpx;
      line-height: 50rpx;
      color: $wallpaper-text-color-2;
      background-color: #f6f6f6;
      border-radius: 10rpx;
    }
  }
}
</style>
