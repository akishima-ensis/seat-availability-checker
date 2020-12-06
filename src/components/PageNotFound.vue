<template>
  <v-container>

    <v-card class="mx-auto" width="500">
      <v-card-title>
        PageNotFound
      </v-card-title>
      <v-card-text>
        お探しのページはありません。お探しのページは一時的にアクセスできないか、削除された可能性があります。URLにタイプミスがないか再度ご確認ください。<br><br>
        <a @click="jumpTop">トップページへ</a>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    jumpTop() {
      this.$router.push('/')
    }
  }
}
</script>
