<template>
  <div class="shopping">

    <div v-if="totalPrice === 0" class="container">
      <div class="row">
        <div class="col-xs-12 text-center row__margin--100">
          <h1>Shopping cart is empty</h1>
        </div>
      </div>
    </div>

    <div v-if="totalPrice > 0" class="container">
      <div class="row">
        <div class="col-xs-12 text-center container__margin--20">
          <h1>Shopping Cart</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-4" v-for="product in products" v-model="products">
          <div class="card center-block">
            <img class="card-img-top img-thumbnail" :src="product.imageSource" alt="Card image">
            <div class="card-body">

              <div class="col-xs-8 col-md-8 text-left">
                <p>{{product.itemName}}</p>
              </div>
              <div class="col-xs-4 col-md-4 text-left">
                <p>{{product.price}} €</p>
              </div>
              <div class="col-xs-6 col-md-6">
                <div class="content-fluid__quantity buttons_added text-left">
                  <div class="quantity-toggle">
                    <button @click="decrement(product)">&mdash;</button>
                    <input type="text" :value="product.amount" readonly class="input-text qty text">
                    <button @click="increment(product)">&#xff0b;</button>
                  </div>
                </div>
              </div>
              <div class="col-xs-6 col-md-6 text-left">
                <p><a v-on:click="removeProduct(product.itemName)" class="btn btn-primary btn-lg text-center row__button--basic red-button"
                      href="#"
                      role="button">REMOVE</a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="container-fluid text-right container__margin--200">
        <div class="row back-box">
          <div class="col-xs-6 col-md-offset-6 col-md-3">
            <p>TOTAL:</p>
          </div>
          <div class="col-xs-6 col-md-3">
            <p>{{totalPrice}}€</p>
          </div>
        </div>
      </div>

      <div class="container-fluid text-right">
        <div class="row back-box">
          <div class="col-xs-offset-6 col-xs-6 col-md-offset-6 col-md-6">
            <router-link class="nav-link" to="/shippingInformation"><p><a
              class="btn btn-primary btn-lg row__button--basic green-button"
              href="#"
              role="button">CONTINUE</a></p></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShoppingCart",
    data() {
      return {
        totalPrice: this.getTotalPrice(),
        quantity: 1,
        products: JSON.parse(localStorage.getItem('products'))
      }
    },
    methods: {
      increment(product) {
        product.amount++;

        let existing = JSON.parse(localStorage.getItem('products'));

        for (let i = 0; i < existing.length; i++) {
          if (existing[i].itemName === product.itemName) {
            existing[i].amount++;
          }
        }
        localStorage.setItem('products', JSON.stringify(existing));
        this.getTotalPrice();
      },

      decrement(product) {
        if (product.amount === 1) {
          alert('Negative quantity not allowed')
        } else {
          product.amount--;

          let existing = JSON.parse(localStorage.getItem('products'));

          for (let i = 0; i < existing.length; i++) {
            if (existing[i].itemName === product.itemName) {
              existing[i].amount--;
            }
          }
          localStorage.setItem('products', JSON.stringify(existing));
          this.getTotalPrice();
        }
      },

      getProducts() {
        return JSON.parse(localStorage.getItem('products'));
      },

      getTotalPrice() {
        let existing = JSON.parse(localStorage.getItem('products'));
        let totalPrice = 0;

        if (existing) {

          for (let i = 0; i < existing.length; i++) {
            totalPrice += existing[i].price * existing[i].amount
          }

        }
        this.totalPrice = totalPrice;
        return totalPrice;
      },

      removeProduct(product) {
        let existing = JSON.parse(localStorage.getItem('products'));
        let new_list = [];
        for (let i = 0; i < existing.length; i++) {
          if (existing[i]['itemName'] !== product) {
            new_list.push(existing[i]);
          }
        }
        localStorage.setItem('products', JSON.stringify(new_list));
        this.products = JSON.parse(localStorage.getItem('products'));
        this.getTotalPrice();

      }
    }
  }
</script>

<style scoped>

</style>
