<script lang="ts" setup>
// 这个千万不要引入
// import { ElMessage } from 'element-plus'

const handleClick = () => {
  ElMessage.success('Hello World!')
}
</script>

<template>
  <div>
    <div>App</div>
    <svg-icon name="dashboard" />
    <nav>
      <router-link to="/login">Go to Login</router-link>
      &nbsp;|&nbsp;
      <router-link to="/">Go to Dashboard</router-link>
    </nav>
    <router-view />
    <el-button @click="handleClick" type="primary">点击</el-button>
  </div>
</template>

<style lang="scss" scoped></style>
