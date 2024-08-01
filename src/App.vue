<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按鈕</el-button>
    <el-button type="success" size="small" :icon="Edit">編輯按鈕</el-button>
    <el-button type="danger" size="default" :icon="Delete">刪除按鈕</el-button>
  </div>
  <div>
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>
  <Test></Test>
  <!-- svg 的用法  -->
  <svg style="width: 30px; height: 30px; color: aqua">
    <use xlink:href="#icon-arrow"></use>
  </svg>
</template>

<script setup lang="ts">
// 引入 element-plus 圖標元件
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import Test from '@/components/Test.vue';
</script>

<style scoped></style>
