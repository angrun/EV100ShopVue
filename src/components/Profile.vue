<template>
  <div class="body__index">
    <div class="container">
      <div class="container-fluid text-center container__margin--30 container__margin--b5">
        <div class="row">
          <div class="col-sm-4 ">
            <a v-on:click="profileMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !profile}">
              Profile</p></a>
          </div>
          <div class="col-sm-4">
            <a v-on:click="recentMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !recent}">Recent</p></a>
          </div>
          <div class="col-sm-4">
            <a v-on:click="recommendedMode" href="#"><p v-bind:class="{'row_font--opacity-level' : !recommended}">
              Recommended</p></a>
          </div>
        </div>
      </div>

      <div v-if="profile && !edit">
        <div class="row">
          <div class="col-xs-12 text-right">
            <a v-on:click="enableEditMode" href="#"><i style='font-size:24px' class='far'>&#xf185;</i></a>
          </div>
          <div class="col-xs-12 text-center">
            <h1>{{model.name + ' ' + model.surname}}</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 text-center">
            <img alt="user icon" :src="model.image" class="row__button--basic">
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 text-center">
            <h3>Estonian level</h3>
            <div class="progress center-block">
              <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0"
                   aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 text-center">
            <p>{{model.email}}/p>
            <p>{{model.phone}}</p>
            <p>{{model.address}}</p>
            <p>{{model.detailedAddress}}</p>
            <br>
            <h3>CREDIT CARD INFO</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 text-center">
            <p>{{encryptCreditCard(model.creditCard)}}</p>
          </div>

        </div>

        <div class="row">
          <div class="col-xs-12 text-center">
            <router-link class="nav-link" to="/"><p><a class="btn btn-primary btn-lg row__button--basic red-button"
                                                       href="#"
                                                       role="button">LOG OUT</a></p></router-link>
          </div>
        </div>
      </div>
      <div v-if="profile && edit">
        <div class="container__margin--30">
          <form v-on:submit.prevent="onSubmit">

            <div class="form-group">
              <label for="formName">Edit Name</label>
              <input type="text" name="name" id="formName" class="form-control" v-model.number.lazy="model.name"
                     v-validate="'required'"
                     v-bind:class="{'form-control': true, 'error': errors.has('name') }">
              <span v-show="errors.has('name')" class="text-danger errorMessage">{{ errors.first('name') }}</span>
            </div>

            <div class="form-group">
              <label for="formSurname">Enter Surname</label>
              <input name="surname" id="formSurname" class="form-control" v-model.number.lazy="model.surname"
                     placeholder="Enter surname" v-validate="'required'"
                     v-bind:class="{'form-control': true, 'error': errors.has('surname') }">
              <span v-show="errors.has('surname')" class="text-danger errorMessage">{{ errors.first('surname') }}</span>
            </div>

            <div class="form-group">
              <label for="formEmailSingUp">Enter Email</label>
              <input type="email" name="email" id="formEmailSingUp" v-model.number.lazy="model.email"
                     v-validate="'required|email'"
                     v-bind:class="{'form-control': true, 'error': errors.has('email') }">
              <span v-show="errors.has('email')" class="text-danger errorMessage">{{ errors.first('email') }}</span>
            </div>

            <div class="form-group">
              <label for="formAddress">Address</label>
              <input type="text" name="address" id="formAddress" v-model.number.lazy="model.address"
                     v-validate="'required'"
                     v-bind:class="{'form-control': true, 'error': errors.has('address') }">
              <span v-show="errors.has('address')" class="text-danger errorMessage">{{ errors.first('address') }}</span>
            </div>

            <div class="form-group">
              <label for="formCreditCard">Credit Card</label>
              <input type="text" name="creditCard" id="formCreditCard" v-model.number.lazy="model.creditCard"
                     v-validate="'required|credit_card'"
                     v-bind:class="{'form-control': true, 'error': errors.has('creditCard') }">
              <span v-show="errors.has('creditCard')"
                    class="text-danger errorMessage">{{ errors.first('creditCard') }}</span>
            </div>

            <p>
              <input class="btn btn-primary btn-lg row__button--basic green-button" role="button"
                     type="submit"
                     value="SAVE"
              >
            </p>

          </form>
        </div>

      </div>
      <div v-if="recent || recommended">
        <Item v-for="product in products"
              :key="product.id" :imageSource="product.imageSource" :alt="product.itemName" :itemName="product.itemName"
              :price="product.price" :description="product.description" :feedbacks="product.feedbacks"></Item>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from "./helpingComps/Item";

  export default {
    name: "Profile",
    components: {Item},
    comments: {
      'Item': Item
    },
    data() {
      return {
        profile: true,
        recent: false,
        recommended: false,
        edit: false,
        model: require('../assets/data_base.json').data.userData,
        products: require('../assets/data_base.json').data.products,
      }
    },
    methods: {
      profileMode: function () {
        this.profile = true;
        this.recent = false;
        this.recommended = false;
      }
      ,
      recentMode: function () {
        this.profile = false;
        this.recent = true;
        this.recommended = false;
      }
      ,
      recommendedMode: function () {
        this.profile = false;
        this.recent = false;
        this.recommended = true;
      },

      encryptCreditCard: function (creditCard) {
        return '**** **** **** ' + creditCard.substring(creditCard.length - 4, creditCard.length);
      },
      enableEditMode: function () {
        this.edit = true;
      },
      disableEditMode: function () {
        this.edit = false;
      },
      onSubmit: function () {
        this.$validator.validateAll().then((valid) => {
          if (valid) {
            this.disableEditMode();
          }
        }).catch(() => {
          console.log('errors exist', this.errors)
        });
      }
    }
  }

</script>

<style scoped>

</style>
