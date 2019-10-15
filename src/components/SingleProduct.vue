<template>
  <div class="body__single-product">
    <div class="container">

      <div class="container-fluid text-center container__margin--50">
        <div class="row">
          <div class="col-sm-12">
            <h1>{{$route.query.itemName}}</h1>
          </div>
        </div>
      </div>

      <div class="content-fluid container__margin--30">
        <div class="row">
          <div class="col-sm-6 text-center">
            <img class="img-thumbnail" :src="$route.query.imageSource" alt="Kohuke">
          </div>
          <div class="col-sm-6 text-center">
            <div class="col-xs-12 col-md-12">
              <div class="col-xs-6 col-md-6">
                <h3>Price</h3>
              </div>
              <div class="col-xs-6 col-md-6">
                <h3>{{$route.query.price + '€'}}</h3>
              </div>
            </div>

            <div class="col-xs-12 col-md-12 container__margin--30">
              <div class="col-xs-6 col-md-6">
                <h3>Amount</h3>
              </div>
              <div class="col-xs-6 col-md-6 padding-fix">
                <div class="content-fluid__quantity buttons_added">
                  <div class="quantity-toggle">
                    <button @click="decrement()">&mdash;</button>
                    <input type="text" :value="quantity" readonly class="input-text qty text">
                    <button @click="increment()">&#xff0b;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-fluid container__margin--30">
        <div class="row back-box">
          <div class="col-xs-6 col-md-6 text-right">
            <router-link class="nav-link" to="/shoppingCart"><p><a v-on:click="addToCart($route.query.itemName, $route.query.imageSource, $route.query.price, quantity)" class="btn btn-primary btn-lg row__button--basic green-button container__margin--20"
                  href="#"
                                                                   role="button">Buy Now</a></p></router-link>
          </div>
          <div class="col-xs-6 col-md-6 text-left">
            <p><a v-on:click="addToCart($route.query.itemName, $route.query.imageSource, $route.query.price, quantity); showModal()"
                  class="btn btn-primary btn-lg row__button--basic yellow-button container__margin--20"
                  href="#"
                                                                   role="button">Add to Cart</a></p>
          </div>
        </div>
      </div>

      <div class="content-fluid container__margin--30">
        <div class="row back-box">
          <div class="col-xs-6 col-md-6 text-right">
            <a v-on:click="detailsMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !details}">Details</p></a>
          </div>
          <div class="col-xs-6 col-md-6 text-left">
            <a v-on:click="feedbackMode" href="#"><p v-bind:class="{'row_font--opacity-level' : details}">Feedback</p></a>
          </div>
        </div>
      </div>

      <div v-if="details" class="content-fluid container__margin--20">
        <div class="row back-box">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <p>
              {{$route.query.description}}
            </p>
          </div>
        </div>
      </div>

      <div v-if="!details" class="content-fluid container__margin--20">
        <div class="row back-box">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <ul v-for="feedback in $route.query.feedbacks">
            <li>{{feedback.text}}</li>
            </ul>
          </div>
        </div>
      </div>

      <Modal message="Product was added" v-show="isModalVisible" @close="closeModal"/>

    </div>
  </div>
</template>

<script>
  import Products from "./Products";
  import Modal from './helpingComps/Modal';

  export default {
    name: "SingleProduct",
    components: {Products, Modal},
    comments: {
      'Products': Products,
      'Modal': Modal,
    },
    data() {
      return {
        quantity: 1,
        isModalVisible: false,
        details: true
      }
    },
    methods: {

      detailsMode() {
        this.details = true;
      },

      feedbackMode() {
        this.details = false;
      },

      addToCart(itemName, imageSource, price, amount) {

        this.quantity = 1;
        let existing = JSON.parse(localStorage.getItem('products'));

        if (existing) {

          let found = false;
          for (let i = 0; i < existing.length; i++) {
            if (existing[i]['itemName'] === itemName) {
              found = true;
              existing[i].amount = existing[i].amount + amount;
              localStorage.setItem("products", JSON.stringify(existing));
              break;
            }
          }

          if (!found) {
            existing.push({itemName, imageSource, price, amount});
            localStorage.setItem("products", JSON.stringify(existing));
          }
        } else {
          let productsList = [];
          productsList.push({itemName, imageSource, price, amount});
          localStorage.setItem('products', JSON.stringify(productsList));
        }

      },
      increment() {
        this.quantity++
      },
      decrement() {
        if (this.quantity === 1) {
          alert('Negative quantity not allowed')
        } else {
          this.quantity--
        }
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }
</script>

<style scoped>

</style>
