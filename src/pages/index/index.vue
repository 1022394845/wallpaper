<script setup>
import { getBannerListAPI, getDayRecommendAPI, getRecommendCategoryListAPI } from '@/api/wallpaper'
import { getNoticeListAPI } from '@/api/notice'

// banner图列表
const bannerList = ref([])
const getBannerList = async () => {
  const { data } = await getBannerListAPI()
  bannerList.value = data
}

// 公告列表
const noticeList = ref([])
const getNoticeList = async () => {
  const { data } = await getNoticeListAPI()
  noticeList.value = data
}

// 每日推荐
const dayRecommend = ref([])
const getDayRecommend = async () => {
  const { data } = await getDayRecommendAPI()
  dayRecommend.value = data
}

// 分类列表
const categoryList = ref([])
const getCategoryList = async () => {
  const { data } = await getRecommendCategoryListAPI()
  categoryList.value = data
}

onLoad(() => {
  getBannerList()
  getNoticeList()
  getDayRecommend()
  getCategoryList()
})

const goPreview = id => {
  uni.navigateTo({ url: `/pages/preview/index?id=${id}&single=true` })
}

const goNotice = id => {
  uni.navigateTo({ url: `/pages/notice/index?id=${id}` })
}
</script>

<template>
  <view class="home-page wrapper">
    <NavBar title="推荐" />

    <!-- 轮播图 -->
    <view class="banner">
      <swiper
        indicator-dots
        circular
        autoplay
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#ffffff"
      >
        <swiper-item v-for="item in bannerList" :key="item._id">
          <image class="image" :src="item.picurl" mode="scaleToFill" />
        </swiper-item>
      </swiper>
    </view>

    <!-- 公告栏 -->
    <view class="notice">
      <uni-icons class="sound-icon" type="sound-filled" />
      <text class="title">公告</text>
      <view class="content">
        <swiper autoplay circular vertical>
          <swiper-item
            class="item ellipsis"
            v-for="item in noticeList"
            :key="item._id"
            @click="goNotice(item._id)"
          >
            {{ item.title }}
          </swiper-item>
        </swiper>
      </view>
      <uni-icons class="forward-icon" type="forward" />
    </view>

    <!-- 推荐 -->
    <view class="recommend">
      <CommonTitle title="每日推荐">
        <template #default>
          <view class="recommend-custom">
            <uni-icons class="calendar-icon" type="calendar" />
            <view class="date">
              <uni-dateformat :date="Date.now()" format="dd" />
              <text>号</text>
            </view>
          </view>
        </template>
      </CommonTitle>
      <scroll-view class="list" scroll-x>
        <image
          v-for="item in dayRecommend"
          :key="item._id"
          :src="item.smallPicurl"
          class="item"
          mode="scaleToFill"
          @click="goPreview(item._id)"
        />
      </scroll-view>
    </view>

    <!-- 精选 -->
    <view class="topic">
      <CommonTitle title="专题精选">
        <template #default>
          <navigator class="topic-custom" url="/pages/category/index" open-type="switchTab">
            更多 +
          </navigator>
        </template>
      </CommonTitle>
      <view class="container">
        <CategoryItem v-for="item in categoryList" :key="item._id" :detail="item" />
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

    :deep(.sound-icon .uni-icons),
    :deep(.sound-icon.uni-icons) {
      font-size: 40rpx !important;
      color: $wallpaper-main-color !important;
    }

    :deep(.forward-icon .uni-icons),
    :deep(.forward-icon.uni-icons) {
      font-size: 30rpx !important;
      color: $wallpaper-text-color-3 !important;
    }

    .title {
      margin-right: 40rpx;
      font-size: 28rpx;
      font-weight: 600;
      color: $wallpaper-main-color;
    }

    .content {
      flex: 1;
      overflow: hidden;

      .item {
        font-size: 24rpx;
        color: $wallpaper-text-color-3;
      }
    }
  }

  .recommend {
    width: 100%;

    .recommend-custom {
      display: flex;
      align-items: center;

      :deep(.calendar-icon .uni-icons),
      :deep(.calendar-icon.uni-icons) {
        font-size: 35rpx !important;
        color: $wallpaper-main-color !important;
      }

      .date {
        margin-left: 5rpx;
        display: flex;
        align-items: center;
        color: $wallpaper-main-color;
      }
    }

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

    .topic-custom {
      font-size: 30rpx;
      color: $wallpaper-text-color-3;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15rpx;
    }
  }
}
</style>
