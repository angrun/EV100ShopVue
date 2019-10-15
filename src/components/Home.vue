<template>
  <div class="body__index circular" :style="{ backgroundImage: 'url(' + image + ')' }">

    <div class="container">
      <div class="carousel-caption container__margin--200">
        <h1>Welcome to Estonia</h1>
        <router-link class="nav-link" to="/products"><p><a class="btn btn-primary btn-lg shop-btn" href="#"
                                                           role="button">SHOP NOW</a></p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from './helpingComps/Navigation'

  export default {

    name: 'Home',
    components: {
      'Nav': Nav
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        image: 'static/forest.jpg'
      };
    },
  };
</script>

<style>

</style>










