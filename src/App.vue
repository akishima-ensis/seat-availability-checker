<template>
  <v-app id="app">
    <v-main>
      <Header/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    Header,
    HelloWorld,
  },
}
</script>
