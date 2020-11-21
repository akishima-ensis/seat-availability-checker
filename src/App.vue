<template>
  <v-app id="app">
    <v-main>
      <Header/>
      <Contents/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Contents from './components/Contents'

export default {
  name: 'App',

  components: {
    Header,
    Contents
  },
}
</script>
