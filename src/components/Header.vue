<template>
  <v-app-bar app dense flat>
    アキシマエンシス空席チェッカー
    <v-spacer></v-spacer>
    <div>
      <v-switch v-model="darkMode" :prepend-icon="themeIcon" hide-details label=""></v-switch>
    </div>
  </v-app-bar>
</template>

<script>
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
  }
}
</script>
