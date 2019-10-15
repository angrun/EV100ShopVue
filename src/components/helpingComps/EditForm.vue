<template>
  <div>
    <div class="container__margin--30">
      <form v-on:submit.prevent="onSubmit">

        <div class="form-group">
          <label for="formName">Edit Name</label>
          <input type="text" name="name" id="formName" class="form-control" v-model.number.lazy="model.name"
                 v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('name') }">
          <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
        </div>

        <div class="form-group">
          <label for="formSurname">Enter Surname</label>
          <input name="surname" id="formSurname" class="form-control" v-model.number.lazy="model.surname"
                 placeholder="Enter surname" v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('surname') }">
          <span v-show="errors.has('surname')" class="text-danger">{{ errors.first('surname') }}</span>
        </div>

        <div class="form-group">
          <label for="formEmailSingUp">Enter Email</label>
          <input type="email" name="email" id="formEmailSingUp" v-model.number.lazy="model.email"
                 v-validate="'required|email'"
                 v-bind:class="{'form-control': true, 'error': errors.has('email') }">
          <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
        </div>

        <div class="form-group">
          <label for="formAddress">Address</label>
          <input type="text" name="address" id="formAddress" v-model.number.lazy="model.address"
                 v-validate="'required'"
                 v-bind:class="{'form-control': true, 'error': errors.has('address') }">
          <span v-show="errors.has('address')" class="text-danger">{{ errors.first('address') }}</span>
        </div>

        <div class="form-group">
          <label for="formCreditCard">Credit Card</label>
          <input type="text" name="creditCard" id="formCreditCard" v-model.number.lazy="model.creditCard"
                 v-validate="'required|credit_card'"
                 v-bind:class="{'form-control': true, 'error': errors.has('creditCard') }">
          <span v-show="errors.has('creditCard')" class="text-danger">{{ errors.first('creditCard') }}</span>
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

</template>

<script>
  export default {
    name: "EditForm",
    data() {
      return {
        profile: true,
        recent: false,
        recommended: false,
        edit: false,
        canSave: function () {
          this.$validator.validateAll().then((valid) => {
            return valid;
          }).catch(() => {
            console.log('errors exist', this.errors)
          });
        },
        model: {
          name: 'Cynthia',
          surname: 'Brown',
          image: "../../static/user_icon.png",
          email: "cynthia.brown@hotmail.com",
          phone: '(886) 798-1674',
          address: '3637 Streich Unions',
          detailedAddress: 'Port Braxtonchester, South Carolina, 00769-4709',
          creditCard: '5374 8321 5534 7530'
        },

      }
    },
    methods: {
      disableEditMode: function () {
        this.edit = false;
      },
      onSubmit: function () {
        this.$validator.validateAll().then((valid) => {
          if (valid) {
            console.log('form is valid', this.model);
            return true;
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
