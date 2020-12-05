<template>
  <v-app-bar dense flat>
    <v-toolbar-title>アキシマエンシス空席チェッカー</v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-switch v-model="darkMode" :prepend-icon="themeIcon" hide-details label=""></v-switch>
    </div>
  </v-app-bar>
</template>

<script>
import router from '@/router'

export default {
  name: 'Header',
  data() {
    return {
      darkMode: true
    }
  },
  computed: {
    themeIcon() {
      return this.darkMode ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
  },
  watch: {
    darkMode() {
      this.$vuetify.theme.dark = this.darkMode
    }
  },
  methods: {
    jumpTop() {
      if (this.$route.path === '/about') {
        router.push('/')
      }
    }
  }
}
</script>
