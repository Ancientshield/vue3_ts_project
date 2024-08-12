<template>
  <svg :style="{ width, height }">
    <use xlink:href="#icon-home" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
// 封裝 SVG 元件
defineProps({
  // 前綴
  prefix: {
    type: String,
    default: '#icon-'
  },
  // icon 字串名
  name: String,
  // 父元件傳遞顏色
  color: {
    type: String,
    default: 'black'
  },
  width: {
    type: String,
    default: '50px'
  },
  height: {
    type: String,
    default: '50px'
  }
});
</script>

<style scoped></style>
