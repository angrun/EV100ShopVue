import Vue from 'vue';
import App from './App';
import router from './router';
import '../node_modules/jquery/jquery.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import VeeValidate from "vee-validate";
import Chart from 'chart.js';


Vue.config.productionTip = false;
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
