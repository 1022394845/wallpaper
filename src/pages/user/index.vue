<script setup>
import { getUserInfoAPI } from '@/api/user'

// 联系客服电话
const onContactCall = () => {
  uni.makePhoneCall({
    phoneNumber: '15280090178'
  })
}

const userInfo = ref({})
const getUserInfo = async () => {
  const { data } = await getUserInfoAPI()
  userInfo.value = data
}
onLoad(() => {
  getUserInfo()
})
</script>

<template>
  <view class="user wrapper">
    <NavBar title="我的" />
    <view class="user-info">
      <view class="avatar">
        <image class="image" src="@/static/logo.png" mode="scaleToFill" />
      </view>
      <view class="username">{{ userInfo.IP || '默认用户' }}</view>
      <view class="location"
        >来自：{{
          userInfo.address?.city ||
          userInfo.address?.province ||
          userInfo.address?.country ||
          '未知'
        }}</view
      >
    </view>
    <view class="section">
      <UserOperation
        icon="download-filled"
        title="我的下载"
        :number="userInfo.downloadSize"
        url="/pages/classlist/index?type=download&name=我的下载"
        openType="navigate"
      />
      <UserOperation
        icon="star-filled"
        title="我的评分"
        :number="userInfo.scoreSize"
        url="/pages/classlist/index?type=score&name=我的评分"
        openType="navigate"
      />
      <UserOperation icon="chatboxes-filled" title="联系客服">
        <template #default>
          <!-- #ifdef MP -->
          <button open-type="contact" class="mask">联系客服</button>
          <!-- #endif -->
          <!-- #ifndef MP -->
          <button class="mask" @click="onContactCall">拨打电话</button>
          <!-- #endif -->
        </template>
      </UserOperation>
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
      color: $wallpaper-text-color-1;
    }

    .location {
      margin-top: 20rpx;
      font-size: 28rpx;
      color: $wallpaper-text-color-3;
    }
  }

  .section {
    margin-top: 50rpx;
    width: 100%;
    border: 1px solid $wallpaper-border-color-light;
    border-radius: 10rpx;
    box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
    background-color: #ffffff;

    :deep(.item-icon .uni-icons),
    :deep(.item-icon.uni-icons) {
      font-size: 35rpx !important;
      color: $wallpaper-main-color !important;
    }

    :deep(.forward-icon .uni-icons),
    :deep(.forward-icon.uni-icons) {
      font-size: 30rpx !important;
      color: $wallpaper-text-color-3 !important;
    }

    .user-operation:last-child {
      border-bottom: none;
    }

    // 客服
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>
