<script>
import { Bar } from 'vue-chartjs'

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
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
