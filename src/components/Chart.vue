<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins // 追加

export default {
  extends: Bar,
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null,
      responsive: false
    },
  },
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
