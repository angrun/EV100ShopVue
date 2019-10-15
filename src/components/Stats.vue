<template>
  <div class="container">

    <div class="content-fluid container__margin--20 text-center">
      <div class="row back-box">

        <div class="col-md-6">
          <p>PRODUCTS POPULARITY</p>
          <bar-chart class="chart" v-if="loaded" :options="options" :data="productsPopularityChart"/>
        </div>

        <div class="col-md-6">
          <p>BANKS POPULARITY BY USERS</p>
          <pie-chart class="chart" v-if="loaded" :data="banksPopularityChart"/>
        </div>

      </div>
      <div class="row back-box container__margin--20">

        <div class="col-md-12">
          <p>PRODUCTS SOLD BY MONTH</p>
          <line-chart :width="400" :height="100" v-if="loaded" :options="options" :data="productsBoughtByMonthChart"></line-chart>
        </div>
      </div>

      <div class="row back-box container__margin--20 container__margin--b20">

        <div class="col-md-6">
          <p>PRODUCTS SOLD BY COUNTRY</p>
          <doughnut-chart class="chart" v-if="loaded" :data="productsSoldByCountriesChart"/>
        </div>

        <div class="col-md-6">
          <p>COSTUMERS BY AGE</p>
          <bar-chart class="chart" v-if="loaded" :options="options" :data="costumersByAverageAgeChart"/>
        </div>

      </div>
    </div>

  </div>
</template>


<script>

  import BarChart from "./resources/BarChart.js";
  import PieChart from "./resources/PieChart";
  import LineChart from "./resources/LineChart";
  import DoughnutChart from "./resources/DoughnutChart";

  export default {
    name: "Stats",
    components: {
      DoughnutChart,
      LineChart,
      BarChart,
      PieChart
    },
    data() {
      return {
        loaded: false,
        productsData: "",
        options: {
          legend: {
            display: false
          },
          scales:
            {
              yAxes:
                [{

                  stacked: true,
                  ticks: {
                    min: 0,
                  }

                }],
              xAxes: [{
                ticks: {
                  autoSkip: false
                }
              }]
            },
        },
        productsPopularityChart: {
          labels: [],
          datasets: [
            {
              label: "Products Popularity",
              backgroundColor: ['#206BFF', '#483D3F', '#F4EBD9', '#A39A92', '#77685D'],
              data: []
            },
          ]

        },
        banksPopularityChart: {
          labels: ['SEB', 'SweedBank', 'LHV'],
          datasets: [
            {
              label: "Banks popolarity by users",
              backgroundColor: ['#00D343', '#FFBE0B', '#E2DED8'],
              data: []
            },
          ],
        },

        productsBoughtByMonthChart: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Products Sold',
              backgroundColor: "rgba(249, 61, 123, 0.5)",
              data: [],
            }
          ]
        },
        productsSoldByCountriesChart: {
          labels: [],
          datasets: [
            {
              label: 'Products Sold by Country',
              backgroundColor: ['#FFBE0B', '#F96102', '#206BFF', '#FF006E', '#00D343'],
              data: [],
            }
          ],
        },
        costumersByAverageAgeChart: {
          labels: ['children (0-14)', 'youth (15-24)', 'adults (25-64)', 'seniors (65+)'],
          datasets: [
            {
              label: "Costumers by age",
              backgroundColor: ['#80475E', '#C89B7B', '#CC5A71', '#D3EA77'],
              data: []
            },
          ]
        },

      }
    },

    // created() {
    //   this.productsData = data.products;
    // },

    methods: {

      fetchData() {
        fetch("http://dijkstra.cs.ttu.ee/~angrun/stats_data.json", {
          mode: "cors"
        })
          .then(stream => stream.json())
          .then(data => {

            this.productsData = data.products;

            this.getTopBuyableProducts();
            this.getMostPopularBanks();
            this.getSoldProductsDataByMonth();
            this.getProductsByCountry();
            this.getCostumersByAverageAge();
            this.loaded = true;


          }).catch(error => console.error(error))
      },

      getTopBuyableProducts: function () {
        let productsName = [];
        let productsAmount = [];
        let productsInQuantityBought = this.productsData.productsInQuantityBought;
        for (let i in productsInQuantityBought) {
          let product = productsInQuantityBought[i];
          productsName.push(product.product);
          productsAmount.push(product.quantity);
        }
        this.productsPopularityChart.labels = productsName;
        this.productsPopularityChart.datasets[0].data = productsAmount;
      },

      getMostPopularBanks: function () {
        let bankUsersAmount = [];
        let popularBanks = this.productsData.usersPerBank;
        for (let i in popularBanks) {
          let bank = popularBanks[i];
          bankUsersAmount.push(bank.users);
        }
        this.banksPopularityChart.datasets[0].data = bankUsersAmount;
      },

      getSoldProductsDataByMonth: function () {

        let productsBoughtAmount = [];
        let productsBoughtData = this.productsData.productsBoughtByMonth;
        for (let i in productsBoughtData) {
          let product = productsBoughtData[i];
          productsBoughtAmount.push(product.productsSold);
        }
        this.productsBoughtByMonthChart.datasets[0].data = productsBoughtAmount;

      },

      getProductsByCountry: function () {
        let productsName = [];
        let productsAmount = [];
        let productsInQuantityBought = this.productsData.productsBoughtByCountry;
        for (let i in productsInQuantityBought) {
          let product = productsInQuantityBought[i];
          productsName.push(product.country);
          productsAmount.push(product.productsSold);
        }
        this.productsSoldByCountriesChart.labels = productsName;
        this.productsSoldByCountriesChart.datasets[0].data = productsAmount;
      },

      getCostumersByAverageAge: function () {

        let costumersCount = [];
        let costumersAverageAge = this.productsData.averageCostumerAge;
        for (let i in costumersAverageAge) {
          let costumersGroup = costumersAverageAge[i];
          costumersCount.push(costumersGroup.count);

          this.costumersByAverageAgeChart.datasets[0].data = costumersCount;
        }
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>


<style scoped>
</style>
