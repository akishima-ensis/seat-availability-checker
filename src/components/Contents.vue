<template>
  <v-container>

    <v-card class="mb-4 mx-auto" width="500">
      <v-card-text>
        当サイトはアキシマエンシス（昭島市教育福祉総合センター）の学習室における1日分の空席状況を可視化したものを提供するために、昭島市民の有志が開設したものです。詳しくは<a @click="jumpAbout">当サイトについて</a>をご覧ください。
        リアルタイムで空席状況を取得できるLINEBotの友達登録は<a @click="dialog = !dialog">こちら</a>から行えます。
      </v-card-text>
    </v-card>

    <v-card class="mb-4 mx-auto" width="500" v-for="n in 6" :key="n">
      <v-progress-linear v-if="loading" absolute indeterminate color="#46C4B1"/>
      <v-card-title>{{ roomName[n-1] }}</v-card-title>
      <v-card-subtitle>
        <v-overflow-btn :label="dateList[0]" :items="dateList" v-model="date"/>
      </v-card-subtitle>
      <v-card-text>
        <chart v-if="!loading" :chart-data="charts[n-1][0]" :options="charts[n-1][1]"/>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" width="500">
      <v-card outlined>
        <v-card-title>
          空席チェッカー for LINE Bot
        </v-card-title>
        <v-card-text>
          アキシマエンシスの学習席の空席状況をリアルタイムで取得できるLINEbotです。以下のQRコードを読み取るかQRコードをタッチすることで友達登録を行うことができます。<br><br>
          <div class="text-center">
            <a href="https://lin.ee/e3L1AGH"><img alt="LINE-QR" :src="image" width="180" height="180"></a>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import ja from 'dayjs/locale/ja'
import firestore from '../firebase'

import Chart from './Chart'
import image from '../assets/lineqr.png'

dayjs.locale(ja)

export default {
  name: 'Contents',

  components: {
    Chart
  },

  async created() {
    await this.getRoomsData()
        this.date = this.dateList[0]
  },

  data() {
    return {
      image: image,
      dialog: false,
      loading: true,

      roomName: [
          '学習席（有線LAN有）',
          '学習席',
          '研究個室',
          'インターネット・データベース席',
          'グループ学習室',
          'ティーンズ学習室'
      ],
      dateList: [],
      roomsList: [],

      date: '',
      update: [],
      seatsNum: [],
      totalSeatsNum: 0,

      charts: [],
    }
  },

  methods: {
     async getRoomsData() {
      return firestore
          .collection('rooms')
          .get()
          .then(docs => {
            let dateList = []
            let roomsList = []
            docs.forEach(doc => {
              dateList.push(dayjs(doc.id).format('YYYY/MM/DD (ddd)'))
              roomsList.push(doc.data())
            })
            this.dateList = dateList.reverse()
            this.roomsList = roomsList.reverse()

          })
          .catch((error) => {
            console.log(error)
          })
    },

    createChartData(index) {
      const roomsData = this.roomsList[index]
      const roomsDataKeys = Object.keys(roomsData).sort()
      let update = []
      let seatsNum = [[], [], [], [], [], []]
      let totalSeatsNum = []
      for (let i = 0; i < roomsDataKeys.length; i++) {
        if (i % 15 === 0) {
          const rooms = roomsData[roomsDataKeys[i]]
          update.push(dayjs(rooms['update']).format('HH:mm')) // 更新時間
          for (let j = 0; j < 6; j++) {
            seatsNum[j].push(rooms['data'][j]['seats_num']) // 空席数
            if (i === 0) {
              totalSeatsNum.push(rooms['data'][j]['total_seats_num']) // 総席数
            }
          }
        }
      }
      return [update, seatsNum, totalSeatsNum]
    },

    chartTemplate(update, seatsNum, totalSeatsNum) {
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
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: totalSeatsNum,
              userCallback: (label) => {
                if (Math.floor(label) === label) {
                  return label
                }
              }
            }
          }],
          xAxes: [{
            gridLines: {
              display: false,
            }
          }]
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

    createChart() {
      this.loading = true
      this.charts = []
      const index = this.dateList.indexOf(this.date)
      const chartData = this.createChartData(index)
      for (let i = 0; i < 6; i++) {
        const chart = this.chartTemplate(chartData[0], chartData[1][i], chartData[2][i])
        this.charts.push(chart)
      }
      this.loading = false
    },

    jumpAbout() {
      this.$router.push('/about')
    }
  },

  watch: {
    date() {
      this.createChart()
    }
  }
}
</script>
