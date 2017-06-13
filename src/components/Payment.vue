<template>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="row">
          <div class="col-md-6 offset-md-2">

            <p>{{ message }}</p>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="first-name">First Name</label>
                  <input type="text" class="form-control" id="first-name" v-model="payment_data.first_name">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="last-name">Last Name</label>
                  <input type="text" class="form-control" id="last-name" v-model="payment_data.last_name">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-10">
                <div class="form-group">
                  <label for="card-number">Card Number</label>
                  <input type="text" class="form-control" id="card-number" v-model="payment_data.number">
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label for="cvvr">CVV</label>
                  <input type="text" class="form-control" id="cvv" v-model="payment_data.verification_value">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="expiry-month">Expiry Month</label>
                  <input type="text" class="form-control" id="expiry-month" v-model="payment_data.month">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="expiry-moyearnth">Expiry Year</label>
                  <input type="text" class="form-control" id="expiry-year" v-model="payment_data.year">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 text-center">
                <button class="btn btn-primary" v-on:click.prevent="pay()">Complete Order</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'payment',
  data () {
    return {
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
      })
    }
  }
}
</script>
<style></style>
