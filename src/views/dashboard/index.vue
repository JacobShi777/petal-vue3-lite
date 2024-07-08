<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const handleConfirm = () => {
  ElMessage.success(t('common.theme.light'))
}
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <LocaleSwitch />
    <el-button type="primary" @click="handleConfirm">{{ $t('common.action.confirm') }}</el-button>
    <el-date-picker type="date" />
    <ThemeSwitch />
  </div>
</template>

<style lang="scss" scoped></style>
