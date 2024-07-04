<script lang="ts" setup>
console.log('App.vue')
const data = [
  // 这里的格式有问题
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  // 根据 prettier.config.mjs 的 trailingComma: 'all' 规则，data 的最后一个元素后面应该有逗号
  { id: 3, name: 'C' },
]
</script>

<template>
  <div>
    <!-- 这里的格式也有问题 -->
    <div class="title">App</div>
  </div>
</template>

<style lang="scss" scoped>
// 这里的格式也有问题
.title {
  font-size: 24px;
  color: blue;
}
</style>
