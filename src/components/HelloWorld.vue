<template>
  <v-container>
    <p>{{ dates()[0] | dayjs }}</p>
  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import firestore from '../firebase'

dayjs.locale('ja')

export default {
  name: 'HelloWorld',

  async created() {
    await this.getRoomsData()
  },

  data() {
    return {
      roomsData: {},
      rooms: {}
    }
  },

  filters: {
    dayjs(date) {
      return dayjs(date).format('YYYY年MM月DD日 dddd')
    }
  },

  methods: {
    async getRoomsData() {
      return firestore
          .collection('rooms')
          .get()
          .then(docs => {
            let roomsData = {}
            docs.forEach(doc => {
              roomsData[doc.id] = doc.data()
            })
            this.roomsData = roomsData
          })
    },

    // test(roomsData) {
    //   const dates = Object.keys(roomsData).sort()
    //   console.log(dayjs(dates[0]).format('YYYY年MM月DD日 dddd'))
    //
    //   dates.forEach(date => {
    //     for (let room in roomsData[date]) {
    //       console.log(room)
    //     }
    //   })
    // },

    dates() {
      return Object.keys(this.roomsData).sort()
    }
  }
}
</script>
<!--20201112-->
