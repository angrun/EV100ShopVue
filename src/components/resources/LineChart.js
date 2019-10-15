import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['data','options','chartData'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
