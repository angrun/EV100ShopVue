<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li>
              <router-link class="nav-link" to="/">EV100</router-link>
            </li>
            <li class="active">
              <router-link class="nav-link" to="/products">Products</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/about">About Estonia</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/stats">Stats</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link class="nav-link" to="/authorization">Sign In/Up</router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/profile"><i style='font-size:24px' class='far'>&#xf007;</i></router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/shoppingCart"><i style='font-size:24px' class='fas'>&#xf07a;</i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
  export default {
    name: 'Navigation',
  }
</script>

