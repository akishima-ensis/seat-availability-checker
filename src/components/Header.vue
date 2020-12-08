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
      darkMode: undefined
    }
  },
  created() {
    let displayMode = localStorage.getItem('displayMode')
    switch (displayMode) {
      case null:
        this.darkMode = true
        localStorage.setItem('displayMode', 'dark')
        break
      case 'dark':
        this.darkMode = true
        break
      case 'default':
        this.darkMode = false
    }
  },
  computed: {
    themeIcon() {
      return this.darkMode ? 'mdi-weather-night' : 'mdi-weather-sunny'
    }
  },
  watch: {
    darkMode() {
      if (this.darkMode) {
        localStorage.setItem('displayMode', 'dark')
      } else {
        localStorage.setItem('displayMode', 'default')
      }
      this.$vuetify.theme.dark = this.darkMode
    }
  }
}
</script>
