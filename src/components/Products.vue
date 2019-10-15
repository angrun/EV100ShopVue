<template>
  <div>
    <div class="container">

      <div class="container-fluid text-center container__margin--30 container__margin--b5">
        <div class="row">
          <div class="col-sm-4">
            <a v-on:click="foodMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !food}">Food</p></a>
          </div>
          <div class="col-sm-4">
            <a v-on:click="clothesMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !clothes}">Clothes</p>
            </a>
          </div>
          <div class="col-sm-4">
            <a v-on:click="souvenirsMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !souvenirs}">
              Souvenirs</p></a>
          </div>
        </div>
      </div>

      <div class="row">
        <Item v-for="product in productsFood" v-if="food"
              :key="product.id" :imageSource="product.imageSource" :alt="product.itemName" :itemName="product.itemName"
              :price="product.price" :description="product.description" :feedbacks="product.feedbacks">
        </Item>

        <Item v-for="product in productsClothes" v-if="clothes"
              :key="product.id" :imageSource="product.imageSource" :alt="product.itemName" :itemName="product.itemName"
              :price="product.price" :description="product.description" :feedbacks="product.feedbacks"></Item>

        <Item v-for="product in productsSouvenirs" v-if="souvenirs"
              :key="product.id" :imageSource="product.imageSource" :alt="product.itemName" :itemName="product.itemName"
              :price="product.price" :description="product.description" :feedbacks="product.feedbacks"></Item>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from "./helpingComps/Item";

  export default {
    name: "Products",
    components: {Item},
    comments: {
      'Item': Item
    },
    data() {
      return {
        food: true,
        clothes: false,
        souvenirs: false,

        productsFood: require('../assets/data_base.json').data.productsFood,
        productsClothes: require('../assets/data_base.json').data.productsClothes,
        productsSouvenirs: require('../assets/data_base.json').data.productsSouvenirs
      }
    },
    methods: {
      foodMode: function () {
        this.food = true;
        this.clothes = false;
        this.souvenirs = false;
      },
      clothesMode: function () {
        this.food = false;
        this.clothes = true;
        this.souvenirs = false;
      },
      souvenirsMode: function () {
        this.food = false;
        this.clothes = false;
        this.souvenirs = true;
      },
    }
  }
</script>

<style scoped>

</style>
