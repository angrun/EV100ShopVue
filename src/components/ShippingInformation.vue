<template>
  <div>
    <div class="container">

      <div class="row">
        <div class="col-xs-12 text-center container__margin--20">
          <h1>Shipping Information</h1>
        </div>
      </div>

      <div class="container__margin--30">
        <form>
          <div class="form-group">
            <label for="nameInput">Name</label>
            <input type="text" class="form-control" id="nameInput" :placeholder="userData.name">
          </div>

          <div class="form-group">
            <label for="surnameInput">Surname</label>
            <input type="text" class="form-control" id="surnameInput" :placeholder="userData.surname">
          </div>

          <div class="form-group">
            <label for="emailInput">Email</label>
            <input type="email" class="form-control" id="emailInput" :placeholder="userData.email">
          </div>

          <div class="form-group">
            <label for="addressInput">Address</label>
            <input type="text" class="form-control" id="addressInput" :placeholder="userData.address">
          </div>

          <div class="form-group">
            <label for="detailedAddressInput">Detailed address</label>
            <input type="text" class="form-control" id="detailedAddressInput" :placeholder="userData.detailedAddress">
          </div>

          <div class="form-group">
            <label for="creditCardInput">Credit Card <img src="../../static/master_card.png" alt="Master Card"></label>
            <input type="text" class="form-control" id="creditCardInput" :placeholder="userData.creditCard">
          </div>

          <div class="col-xs-offset-6 col-xs-6 col-md-offset-6 col-md-6">
            <router-link class="nav-link" to="/payingInformation"><p><a
              class="btn btn-primary btn-lg row__button--basic green-button container__margin--20"
              href="#"
              role="button">CONTINUE</a></p></router-link>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ShippingInformation",
    data() {
      return {
        userData: require('../assets/data_base.json').data.userData,
      }
    }
  }
</script>

<style scoped>

</style>
