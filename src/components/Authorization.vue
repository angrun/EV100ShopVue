<template>
  <div class="container">


    <div class="content-fluid container__margin--30">
      <div class="row back-box">
        <div class="col-xs-6 col-md-6 text-right">
          <a v-on:click="singInmode" href="#"><h1 v-bind:class="{'row_font--opacity-level' : !singIn}">Sign In</h1></a>
        </div>
        <div class="col-xs-6 col-md-6">
          <a v-on:click="singUpmode" href="#"><h1 v-bind:class="{'row_font--opacity-level' : singIn}" class="op">Sign
            Up</h1></a>
        </div>
      </div>
    </div>

    <div v-if="singIn" class="content-fluid container__margin--30">
      <form v-on:submit.prevent="onSubmit">

        <div class="form-group">
          <label for="formEmail">Email</label>
          <input type="email" name="email" id="formEmail" v-model="model.email" placeholder="Enter email"
                 v-validate="'required|email'"
                 v-bind:class="{'form-control': true, 'error': errors.has('email') }">
          <span v-show="errors.has('email')" class="text-danger errorMessage">{{ errors.first('email') }}</span>
        </div>

        <div class="form-group">
          <label for="formPassword">Password</label>
          <input type="password" name="password" id="formPassword" v-model="model.password" placeholder="Enter password"
                 v-validate="'required|min:5'" v-bind:class="{'form-control': true, 'error': errors.has('password') }">
          <span v-show="errors.has('password')" class="text-danger errorMessage">{{ errors.first('password') }}</span>
        </div>

        <div v-for="icon in icons" :key="icon.id" class="text-left container__margin--30 one-line-block">
          <router-link class="nav-link" to="/profile"><a href="#">
            <img :src="icon.url" :alt="icon.alt">
          </a></router-link>
        </div>
        <div class="col-xs-12 text-right container__margin--20">
          <p>
            <input class="btn btn-primary btn-lg row__button--basic green-button" role="button"
                   type="submit"
                   value="SIGN IN"
            >
          </p>
        </div>
      </form>
    </div>

    <div v-if="!singIn" class="content-fluid container__margin--30">
      <form v-on:submit.prevent="onSubmit">


        <div class="form-group">
          <label for="formName">Enter Name</label>
          <input name="name" id="formName" class="form-control" v-model="model.name" placeholder="Enter name"
                 v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('name') }">
          <span v-show="errors.has('name')" class="text-danger errorMessage">{{ errors.first('name') }}</span>
        </div>

        <div class="form-group">
          <label for="formSurname">Enter Surname</label>
          <input name="surname" id="formSurname" class="form-control" v-model="model.surname"
                 placeholder="Enter surname" v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('surname') }">
          <span v-show="errors.has('name')" class="text-danger errorMessage">{{ errors.first('surname') }}</span>
        </div>

        <div class="form-group">
          <label for="formEmailSingUp">Enter Email</label>
          <input type="email" name="email" id="formEmailSingUp" v-model="model.email" placeholder="Enter email"
                 v-validate="'required|email'"
                 v-bind:class="{'form-control': true, 'error': errors.has('email') }">
          <span v-show="errors.has('email')" class="text-danger errorMessage">{{ errors.first('email') }}</span>
        </div>

        <div class="form-group">
          <label for="formCountry">Country</label>
          <select id="formCountry" v-model="model.country" name="country" v-validate="'required'"
                  :class="{'form-control': true, 'error': errors.has('country')}">
            <option>England</option>
            <option>Russia</option>
          </select>
          <span v-show="errors.has('country')" class="text-danger errorMessage">{{ errors.first('country') }}</span>
        </div>

        <div class="form-group">
          <label for="formCity">City</label>
          <select id="formCity" v-model="model.city" name="city" v-validate="'required'"
                  :class="{'form-control': true, 'error': errors.has('city')}">
            <option>London</option>
            <option>Moscow</option>
          </select>
          <span v-show="errors.has('city')" class="text-danger errorMessage">{{ errors.first('city') }}</span>
        </div>

        <div class="form-group">
          <label for="formAddress">Address</label>
          <input type="text" name="address" id="formAddress" v-model="model.address" placeholder="Enter address"
                 v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('address') }">
          <span v-show="errors.has('address')" class="text-danger errorMessage">{{ errors.first('address') }}</span>
        </div>

        <div class="form-group">
          <label for="formCreditCard">Credit Card</label>
          <input type="text" name="creditCard" id="formCreditCard" v-model="model.creditCard"
                 placeholder="Enter creditCard" v-validate="'required|credit_card'"
                 v-bind:class="{'form-control': true, 'error': errors.has('creditCard') }">
          <span v-show="errors.has('creditCard')" class="text-danger errorMessage">{{ errors.first('creditCard') }}</span>
        </div>

        <div class="form-group">
          <label for="formPassword1">Password</label>
          <input ref="password1" type="password" name="password1" id="formPassword1" v-model="model.password1"
                 placeholder="Enter password" v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('password') }">
          <span v-show="errors.has('password')" class="text-danger errorMessage">{{ errors.first('password') }}</span>
        </div>

        <div class="form-group">
          <label for="formPassword2">Confirm Password</label>
          <input type="password" name="password" id="formPassword2" v-model="model.password2"
                 placeholder="Confirm password" v-validate="'required|confirmed:password1'"
                 data-vv-as="password" v-bind:class="{'form-control': true, 'error': errors.has('password') }">
          <span v-show="errors.has('password')" class="text-danger errorMessage">{{ errors.first('password') }}</span>
        </div>


        <div class="form-group">
          <label>
            <input type="checkbox" name="Terms & Policy" v-validate="'required'"> Terms & Policy
          </label>
          <span v-show="errors.has('Terms & Policy')" class="text-danger errorMessage">{{ errors.first('Terms & Policy') }}</span>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="newsLetter">
          <label class="form-check-label" for="newsLetter">Subscribe for Newsletter</label>
        </div>

        <div v-for="icon in icons" :key="icon.id" class="text-left container__margin--30 one-line-block">
          <router-link class="nav-link" to="/profile"><a href="#">
            <img :src="icon.url" :alt="icon.alt">
          </a></router-link>
        </div>

        <div class="col-xs-12 text-right container__margin--20">
          <p>
            <input class="btn btn-primary btn-lg row__button--basic green-button" role="button"
                   type="submit"
                   value="SIGN UP"
            >
          </p>
        </div>
      </form>
    </div>

  </div>

</template>

<script>

  export default {
    name: "Authorization",

    data: function () {
      return {
        singIn: true,
        model: {
          name: '',
          surname: '',
          email: '',
          country: '',
          city: '',
          address: '',
          creditCard: '',
          password1: '',
          password2: '',
          subscribe: false,
        },
        icons: require('../assets/data_base.json').data.icons
      }
    },

    methods: {
      singUpmode: function () {
        this.singIn = false;

      },
      singInmode: function () {
        this.singIn = true;
      },
      onSubmit: function () {
        this.$validator.validateAll().then((valid) => {
          if (valid) {
            this.$router.push("/profile");
          }
        }).catch(() => {
          console.log('errors exist', this.errors)
        });
      },

      // addNewCostumer() {
      //   let countries = ['Estonia', 'Latvia', 'Germany', 'Russia', 'USA', 'Poland'];
      //   let country = countries[Math.floor(Math.random()*countries.length)];
      //
      //   let averageCostumerAge = {};
      //
      //   averageCostumerAge.push([{id: 1, square:2}]);
      //
      //
      // }
    }
  }
</script>

<style scoped>
</style>
