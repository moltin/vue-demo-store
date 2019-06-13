<template>
    <div class="row">

      <div class="ui message" v-bind:class="{ error: isError }" v-if="errors">
        <div class="header">
          {{ errors[0].title }}
        </div>
        {{ errors[0].detail }}
      </div>

      <form class="ui form">
        <h1 class="ui dividing header">Payment Details</h1>

        <div class="field">
          <div class="two fields">
            <div class="field">
              <input type="text"class="form-control" id="first-name" name="First Name" placeholder="First Name" v-model="payment_data.first_name" required>
            </div>
            <div class="field">
              <input type="text" class="form-control" id="last-name" name="Last Name" placeholder="Last Name" v-model="payment_data.last_name" required>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="two fields">
            <div class="twelve wide field">
              <input type="text"class="form-control" id="card-number" name="Card Number" placeholder="Card Number" v-model="payment_data.number" required>
            </div>
            <div class="four wide field">
              <input type="text" class="form-control" id="cvv" name="CVV" placeholder="CVV" v-model="payment_data.verification_value" required>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="two fields">
            <div class="eight wide field">
              <input type="text"class="form-control" id="expiry-month" name="Expiry Month" placeholder="Expiry Month" v-model="payment_data.month" required>
            </div>
            <div class="eight wide field">
              <input type="text" class="form-control" id="expiry-year" name="Expiry Year" placeholder="Expiry Year" v-model="payment_data.year" required>
            </div>
          </div>
        </div>

        <button class="btn btn-primary" v-on:click.prevent="pay()">Complete Order</button>
      </form>

    </div>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'payment',
  data () {
    return {
      isError: false,
      errors: '',
      payment_data: {
        gateway: 'stripe',
        method: 'purchase',
        first_name: '',
        last_name: '',
        number: '',
        month: '',
        year: '',
        verification_value: ''
      },
      message: ''
    }
  },
  methods: {
    pay () {
      MoltinService.pay(this.$route.params.orderId, this.payment_data).then((respond) => {
        this.message = 'Order complete!'
      }).catch((err) => {
        this.isError = true
        this.errors = err.errors
      })
    }
  }
}
</script>
<style></style>
