<script setup></script>

<template>
  <view class="user wrapper">
    <view class="user-info">
      <view class="avatar">
        <image class="image" src="@/static/logo.png" mode="scaleToFill" />
      </view>
      <view class="username">默认用户</view>
      <view class="location">来自：福州</view>
    </view>
    <view class="section">
      <UserOperation icon="download-filled" title="我的下载" :number="2" />
      <UserOperation icon="star-filled" title="我的评分" :number="4" />
      <UserOperation icon="chatboxes-filled" title="联系客服" />
    </view>
    <view class="section">
      <UserOperation icon="notification-filled" title="订阅更新" />
      <UserOperation icon="flag-filled" title="常见问题" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.user {
  width: 100%;

  .user-info {
    margin-top: 50rpx;
    text-align: center;

    .avatar {
      margin: 0 auto 30rpx;
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
      overflow: hidden;
    }

    .username {
      font-size: 44rpx;
      color: #333333;
    }

    .location {
      margin-top: 20rpx;
      font-size: 28rpx;
      color: #c2c2c2;
    }
  }

  .section {
    margin-top: 50rpx;
    width: 100%;
    border: 1px solid #eeeeee;
    border-radius: 10rpx;
    box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

    .user-operation:last-child {
      border-bottom: none;
    }
  }
}
</style>
