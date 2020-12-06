<template>
  <v-container>

    <v-card class="mb-4 mx-auto" width="500">
      <v-card-text>
        当サイトはアキシマエンシス（昭島市教育福祉総合センター）の学習室における1日分の空席状況を可視化したものを提供するために、昭島市民の有志が開設したものです。詳しくは<a @click="jumpAbout">当サイトについて</a>をご覧ください。<br><br>
        リアルタイムで空席状況を取得できるLINEBotの友達登録は<a href="https://line.me/R/ti/p/%40425qffdj">こちら</a>から行えます。
      </v-card-text>
    </v-card>

    <div v-for="(value, key) in 6" :key="key">
      <v-card class="mb-4 mx-auto" width="500">
        <v-progress-linear v-if="!loaded" absolute indeterminate color="#46C4B1"/>
        <v-card-title>{{ roomName[key] }}</v-card-title>
        <v-card-subtitle>{{ date }}</v-card-subtitle>
        <v-card-text>
          <chart v-if="loaded" :chart-data="chart[key][0]" :options="chart[key][1]"/>
        </v-card-text>
      </v-card>
    </div>

  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import firestore from '../firebase'

import Chart from './Chart'

dayjs.locale('ja')

export default {
  name: 'Contents',

  components: {
    Chart
  },

  async created() {
    await this.getRoomsData()
    await this.test()
  },

  data() {
    return {
      roomsData: {},
      loaded: false,
      date: '',
      roomName: [
          '学習席（有線LAN有）',
          '学習席',
          '研究個室',
          'インターネット・データベース席',
          'グループ学習室',
          'ティーンズ学習室'
      ],
      chart: []
    }
  },

  methods: {
    async getRoomsData() {
      return firestore
          .collection('rooms')
          .get()
          .then(docs => {
            let date = ''
            let roomsData = []
            docs.forEach(doc => {
              date = doc.id
              roomsData = doc.data()
            })
            this.date = dayjs(date).format('YYYY年MM月DD日 時点')
            this.roomsData = roomsData
          })
    },

    test() {
      const roomsData = this.roomsData
      const roomsDataKeys = Object.keys(roomsData).sort()

      let update = []
      let seatsNum = [[],[],[],[],[],[]]
      let totalSeatsNum = []

      for (let i=0; i<roomsDataKeys.length; i++) {
        if (i % 15 === 0) {
          const rooms = roomsData[roomsDataKeys[i]]
          update.push(dayjs(rooms[0]['update']).format('HH:mm')) // 更新時間
          for (let j=0; j<6; j++) {
            seatsNum[j].push(rooms[j]['seats_num']) // 空席数
            if (i===0) {
              totalSeatsNum.push(rooms[j]['total_seats_num']) // 総席数
            }
          }
        }
      }

      for (let i=0; i<6; i++) {
        const chart = this.createChart(update, seatsNum[i], totalSeatsNum[i])
        this.chart.push(chart)
      }
      this.loaded = true
    },

    createChart(update, seatsNum, totalSeatsNum) {
      const chartData = {
        labels: update,
        datasets: [
          {
            type: 'bar',
            backgroundColor: '#46C4B1',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            data: seatsNum
          },
        ]
      }

      const options = {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: totalSeatsNum
              }
            }
          ],
        },
        tooltips: {
          callbacks: {
            title: (tooltipItem) => {
              return tooltipItem[0].label + ' 時点'
            },
            label: (tooltipItem) => {
              return '空席数: ' + tooltipItem.yLabel + '席'
            }
          }
        }
      }
      return [chartData, options]
    },

    jumpAbout() {
      this.$router.push('/about')
    }
  }
}
</script>
