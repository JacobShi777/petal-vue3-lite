<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    {{ userStore.token || '-' }} in Dashboard
  </div>
</template>

<style lang="scss" scoped></style>
