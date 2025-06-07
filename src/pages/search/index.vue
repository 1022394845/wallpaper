<script setup>
import TagSection from './components/TagSection.vue'

const searchKey = ref('')
const onSearch = () => {}

// 历史搜索
const historySearch = ref(['搜索1', '搜索2', '搜索3', '搜索4', '搜索5', '搜索6'])
const clearHistory = () => {
  historySearch.value = []
}

// 热门搜索
const recommendSearch = ref(['美女', '帅哥', '宠物', '卡通'])
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
