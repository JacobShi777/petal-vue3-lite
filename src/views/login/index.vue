<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>Login</h1>
    <button @click="userStore.setToken('12345')">设置Token</button>
    {{ userStore.token || '-' }} in Login
  </div>
</template>

<style lang="scss" scoped></style>
