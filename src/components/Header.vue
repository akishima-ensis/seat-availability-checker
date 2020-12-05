<template>
  <v-app-bar dense flat @click="jumpTop">アキシマエンシス空席チェッカー</v-app-bar>
</template>

<script>
import router from '@/router'

export default {
  name: 'Header',
  methods: {
    jumpTop() {
      if (this.$route.path === '/about') {
        router.push('/')
      }
    }
  }
}
</script>
