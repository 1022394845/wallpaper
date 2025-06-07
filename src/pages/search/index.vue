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

const onConfirm = e => {
  onSearch(e.value)
}
const onSearch = key => {
  if (!key) return
  // 缓存历史搜索
  historySearch.value = [...new Set([key, ...historySearch.value])]
  uni.setStorageSync('wallpaper_History', historySearch.value)
  uni.navigateTo({ url: `/pages/classlist/index?keyword=${key}&name=${key}` })
}
</script>

<template>
  <view class="search wrapper">
    <view class="search-input">
      <uni-search-bar v-model="searchKey" :focus="true" cancelButton="none" @confirm="onConfirm" />
    </view>
    <TagSection title="最近搜索" :tagList="historySearch" @search="key => onSearch(key)">
      <template #default>
        <uni-icons type="trash" v-if="historySearch.length" @click="clearHistory"></uni-icons>
      </template>
    </TagSection>
    <TagSection title="热门搜索" :tagList="recommendSearch" @search="key => onSearch(key)" />
  </view>
</template>

<style scoped lang="scss">
.search {
  :deep(.uni-searchbar) {
    padding: 20rpx 0;
  }
}
</style>
