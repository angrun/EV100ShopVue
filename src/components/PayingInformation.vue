<template>
  <div class="paying-methods">
    <div class="container">

      <div class="row">
        <div class="col-xs-12 text-center container__margin--20">
          <h1>Paying Methods</h1>
        </div>
        <div class="col-xs-12 text-center container__margin--20" v-for="bank in banks">
          <router-link class="nav-link" to="/thanking"><a href="#"><img :alt="bank.name" class="bank-image"
                                                                        :src="bank.imageSource"></a></router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: "PayingInformation",
    data() {
      return {
        banks: require('../assets/data_base.json').data.banks
      }
    }
  }
</script>

<style scoped>

</style>
