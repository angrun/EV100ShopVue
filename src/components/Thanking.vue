<template>
  <div class="purchase-end">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 text-center row__margin--100">
          <h1>Thank you for purchase!</h1>
        </div>
        <div class="col-xs-12 text-center container__margin--20">
          <h3>The receipt is sent to your email</h3>
          <h3 id="userEmail">{{userData.email}}</h3>
        </div>
        <div class="col-xs-12 text-center container__margin--20">
          <router-link class="nav-link" to="/"><p><a class="btn btn-primary btn-lg row__button--basic green-button"
                href="#"
                                                                      role="button">MAIN PAGE</a></p></router-link>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
    export default {
        name: "Thanking",
      data() {
        return {
          userData: require('../assets/data_base.json').data.userData,
        }
      }
    }
</script>

<style scoped>
</style>
