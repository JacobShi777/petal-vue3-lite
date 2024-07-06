<script lang="ts" setup>
import 'vue-router'
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
  </div>
</template>

<style lang="scss" scoped></style>
