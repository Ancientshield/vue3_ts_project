<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按鈕</el-button>
    <el-button type="success" size="small" :icon="Edit">編輯按鈕</el-button>
    <el-button type="danger" size="default" :icon="Delete">刪除按鈕</el-button>
  </div>
  <Test></Test>
  <!-- svg 的用法  -->
  <h3>svg測試</h3>
  <svg-icon name="home" color="red" width="100px" height="100px"></svg-icon>
  <Pagination></Pagination>
</template>

<script setup lang="ts">
// 引入 element-plus 圖標元件
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import Test from '@/components/Test.vue';
</script>

<style scoped lang="scss">
$primary: #2050ec;
</style>
