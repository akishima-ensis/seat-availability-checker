<template>
  <v-container>
    <p>{{ msg }}</p>
  </v-container>
</template>

<script>
import firestore from '../firebase'

export default {
  name: 'HelloWorld',

  created() {
    this.getRooms()
  },

  data() {
    return {
      msg: 'hello'
    }
  },

  methods: {
    async getRooms() {
      return firestore
          .collection('rooms')
          .get()
          .then(docs => {
            let data = {}
            docs.forEach(doc => {
              data[doc.id] = doc.data()
            })
            console.log(data)
          })
    },


  }
}
</script>
