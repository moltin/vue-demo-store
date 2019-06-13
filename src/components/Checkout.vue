<template>

    <div class="row">

      <div class="ui message" v-bind:class="{ error: isError }" v-if="errors">

        <ul id="example-1">
          <li v-for="error in errors">
            <div class="header">
              {{ error.source }}
            </div>
            {{ error.detail }}
          </li>
        </ul>

      </div>

      <form class="ui form">
        <h1 class="ui dividing header">Shipping and Billing Details</h1>

        <div class="field">

          <h4 class="ui dividing header">Customer Details</h4>
          <div class="two fields">
            <div class="field">
              <input type="text"class="form-control" id="name" name="Name" placeholder="Name" v-model="checkoutData.customer.name" required>
            </div>
            <div class="field">
              <input type="text" class="form-control" id="email" name="Email" placeholder="Email" v-model="checkoutData.customer.email" required>
            </div>
          </div>
        </div>

        <div class="field">
          <h4 class="ui dividing header">Billing Address</h4>

          <div class="two fields">
            <div class="field">
              <input type="text"class="form-control" id="billing-first-name" name="billing[first-name]" placeholder="First Name" v-model="checkoutData.billing_address.first_name" required>
            </div>
            <div class="field">
              <input type="text" class="form-control" id="billing-last-name" name="billing[last-name]" placeholder="Last Name" v-model="checkoutData.billing_address.last_name" required>
            </div>
          </div>

          <div class="two fields">
            <div class="eight wide field">
              <input type="text" class="form-control" id="billing-line-1" name="billing[address-1]" placeholder="Address Line 1" v-model="checkoutData.billing_address.line_1" required>
            </div>
            <div class="eight wide field">
              <input type="text" class="form-control" id="billing-line-2" name="billing[address-2]" placeholder="Address Line 2" v-model="checkoutData.billing_address.line_2" required>
            </div>
          </div>

          <div class="two fields">
            <div class="eight wide field">
              <input type="text" class="form-control" id="billing-city" name="billing[city]" placeholder="City" v-model="checkoutData.billing_address.city" required>
            </div>
            <div class="eight wide field">
              <input type="text" class="form-control" id="billing-county" name="billing[county]" placeholder="County/State" v-model="checkoutData.billing_address.county" required>
            </div>
          </div>

          <div class="two fields">
            <div class="eight wide field">
              <input type="text" class="form-control" id="billing-postcode" name="billing[postcode]" placeholder="Postcode" v-model="checkoutData.billing_address.postcode" required>
            </div>
            <div class="eight wide field">
              <input type="text"  class="form-control" id="billing-country" name="billing[country]" placeholder="Country" v-model="checkoutData.billing_address.country" required>
            </div>
          </div>
        </div>

        <div class="field">
          <h4 class="ui dividing header">Shipping Address</h4>

          <div class="two fields">
            <div class="field">
              <input type="text"class="form-control" id="shipping-first-name" name="shipping[first-name]" placeholder="First Name" v-model="checkoutData.shipping_address.first_name" required>
            </div>
            <div class="field">
              <input type="text" class="form-control" id="shipping-last-name" name="shipping[last-name]" placeholder="Last Name" v-model="checkoutData.shipping_address.last_name" required>
            </div>
          </div>

          <div class="two fields">
            <div class="eight wide field">
              <input type="text" class="form-control" id="shipping-line-1" name="shipping[address-1]" placeholder="Address Line 1" v-model="checkoutData.shipping_address.line_1" required>
            </div>
            <div class="eight wide field">
              <input type="text" class="form-control" id="shipping-line-2" name="shipping[address-2]" placeholder="Address Line 2" v-model="checkoutData.shipping_address.line_2" required>
            </div>
          </div>

          <div class="two fields">
            <div class="eight wide field">
              <input type="text" class="form-control" id="shipping-city" name="shipping[city]" placeholder="City" v-model="checkoutData.shipping_address.city" required>
            </div>
            <div class="eight wide field">
              <input type="text" class="form-control" id="shipping-county" name="shipping[county]" placeholder="County/State" v-model="checkoutData.shipping_address.county" required>
            </div>
          </div>

          <div class="two fields">
            <div class="eight wide field">
              <input type="text" class="form-control" id="shipping-postcode" name="shipping[postcode]" placeholder="Postcode" v-model="checkoutData.shipping_address.postcode" required>
            </div>
            <div class="eight wide field">
              <input type="text"  class="form-control" id="shipping-country" name="shipping[country]" placeholder="Country" v-model="checkoutData.shipping_address.country" required>
            </div>
          </div>
        </div>

        <button class="btn btn-primary" v-on:click.prevent="checkout()">Checkout!</button>
      </form>
    </div>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'product',
  data () {
    return {
      isError: false,
      errors: '',
      checkoutData: {
        customer: {
          name: 'Ron Swanson',
          email: 'ron@swanson.com'
        },
        shipping_address: {
          first_name: 'Ron',
          last_name: 'Swanson',
          line_1: '2nd Floor British India House',
          line_2: '15 Carliol Square',
          city: 'Newcastle Upon Tyne',
          postcode: 'NE1 6UF',
          county: 'Tyne & Wear',
          country: 'United Kingdom'
        },
        billing_address: {
          first_name: 'Ron',
          last_name: 'Swanson',
          line_1: '2nd Floor British India House',
          line_2: '15 Carliol Square',
          city: 'Newcastle Upon Tyne',
          postcode: 'NE1 6UF',
          county: 'Tyne & Wear',
          country: 'United Kingdom'
        }
      }
    }
  },
  methods: {
    checkout () {
      MoltinService.checkout(this.checkoutData.customer, this.checkoutData.billing_address, this.checkoutData.shipping_address).then((response) => {
        this.$router.push('/payments/' + response.data.id)
      }).catch((err) => {
        this.isError = true
        this.errors = err.errors
      })
    }
  }
}
</script>
<style></style>
