import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['data','options','chartData'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
