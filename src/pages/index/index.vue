<script setup>
// banner图列表
const bannerList = ref([])
const getBannerList = () => {
  const bannerImages = import.meta.glob('/src/assets/wallpaper/banner*.jpg', {
    eager: true, // 立即导入所有匹配的模块
    import: 'default' // 获取默认导出（即图片 URL）
  })
  bannerList.value = Object.values(bannerImages)
}
onReady(() => {
  getBannerList()
})
</script>

<template>
  <view class="home-page wrapper">
    <!-- 轮播图 -->
    <view class="banner">
      <swiper
        indicator-dots
        circular
        autoplay
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#ffffff"
      >
        <swiper-item v-for="(banner, index) in bannerList" :key="index">
          <image class="image" :src="banner" mode="scaleToFill" />
        </swiper-item>
      </swiper>
    </view>

    <!-- 公告栏 -->
    <view class="notice">
      <uni-icons type="sound-filled" size="20" color="#28b389" />
      <text class="title">公告</text>
      <view class="content">
        <swiper autoplay circular vertical>
          <swiper-item class="item ellipsis" v-for="(item, index) in 3" :key="index">
            公告内容
          </swiper-item>
        </swiper>
      </view>
      <uni-icons type="forward" size="16" color="#a0a0a0" />
    </view>

    <!-- 推荐 -->
    <view class="recommend">
      <CommonTitle title="每日推荐">
        <template #custom>
          <uni-icons type="calendar" size="20" color="#28b389" />
          <view style="margin-left: 5rpx; color: #28b389">
            <uni-dateformat :date="Date.now()" format="dd" />号
          </view>
        </template>
      </CommonTitle>
      <scroll-view class="list" scroll-x>
        <image
          v-for="(item, index) in 5"
          :key="index"
          src="@/assets/wallpaper/preview_small.webp"
          class="item"
          mode="scaleToFill"
        />
      </scroll-view>
    </view>

    <!-- 精选 -->
    <view class="topic">
      <CommonTitle title="专题精选">
        <template #custom>
          <view>更多+</view>
        </template>
      </CommonTitle>
      <view class="container">
        <WallpaperItem v-for="(item, index) in 9" :key="index" />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.home-page {
  .banner {
    width: 100%;
    height: 340rpx;
    border-radius: 10rpx;
    overflow: hidden;
  }

  .notice {
    margin: 30rpx auto 0;
    padding: 0 30rpx;
    width: 690rpx;
    height: 80rpx;
    line-height: 80rpx;
    background-color: #f9f9f9;
    display: flex;

    .title {
      margin-right: 40rpx;
      font-size: 28rpx;
      font-weight: 600;
      color: #28b389;
    }

    .content {
      flex: 1;
      overflow: hidden;

      .item {
        font-size: 24rpx;
        color: #666666;
      }
    }
  }

  .recommend {
    width: 100%;

    .list {
      white-space: nowrap;

      .item {
        width: 200rpx;
        height: 445rpx;
        border-radius: 20rpx;

        &:nth-child(n + 2) {
          margin-left: 15rpx;
        }
      }
    }
  }

  .topic {
    width: 100%;

    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15rpx;
    }
  }
}
</style>
