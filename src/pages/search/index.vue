<script setup>
import TagSection from './components/TagSection.vue'

const searchKey = ref('')

// 历史搜索
const historySearch = ref([])
onLoad(() => {
  historySearch.value = uni.getStorageSync('wallpaper_History') || []
})

// 清空历史
const clearHistory = () => {
  historySearch.value = []
  uni.setStorageSync('wallpaper_History', [])
}

// 热门搜索
const recommendSearch = ref(['美女', '帅哥', '宠物', '卡通'])

const onSearch = () => {
  if (!searchKey.value) return
  // 缓存历史搜索
  historySearch.value = [...new Set([searchKey.value, ...historySearch.value])]
  uni.setStorageSync('wallpaper_History', historySearch.value)
}
</script>

<template>
  <view class="search wrapper">
    <view class="search-input">
      <uni-search-bar v-model="searchKey" :focus="true" cancelButton="none" @confirm="onSearch" />
    </view>
    <TagSection title="最近搜索" :tagList="historySearch">
      <template #default>
        <uni-icons type="trash" v-if="historySearch.length" @click="clearHistory"></uni-icons>
      </template>
    </TagSection>
    <TagSection title="热门搜索" :tagList="recommendSearch" />
  </view>
</template>

<style scoped lang="scss">
.search {
  :deep(.uni-searchbar) {
    padding: 20rpx 0;
  }
}
</style>
