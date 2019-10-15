import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ["data", "options", "chartData"],
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
