<script lang="ts" setup>
import { computed } from 'vue'
import { useLocaleStore } from '@/store/locale'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const localeStore = useLocaleStore()
const locale = computed(() => (localeStore.locale === 'zh-cn' ? zhCn : en))
</script>

<template>
  <nav>
    <router-link to="/login">Go to Login</router-link>
    &nbsp;|&nbsp;
    <router-link to="/">Go to Dashboard</router-link>
  </nav>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
