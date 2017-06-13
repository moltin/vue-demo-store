<template>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <form>

          <p>{{ errors }}</p>

          <!-- Customer -->
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="checkoutData.customer.name" required>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="checkoutData.customer.email" required>
              </div>
            </div>
          </div>
          <!-- Customer -->

          <div class="row">
            <div class="col-md-6">
              <h5>Billing Address</h5>
              <hr />
              <!-- Billing Address -->
              <div class="form-group">
                <label for="billing-first-name">First Name</label>
                <input type="text" class="form-control" id="billing-first-name" v-model="checkoutData.billing_address.first_name" required>
              </div>
              <div class="form-group">
                <label for="billing-last-name">Last Name</label>
                <input type="text" class="form-control" id="billing-last-name" v-model="checkoutData.billing_address.last_name" required>
              </div>
              <div class="form-group">
                <label for="billing-line-1">Address Line 1</label>
                <input type="text" class="form-control" id="billing-line-1" v-model="checkoutData.billing_address.line_1" required>
              </div>
              <div class="form-group">
                <label for="billing-line-2">Address Line 2</label>
                <input type="text" class="form-control" id="billing-line-2" v-model="checkoutData.billing_address.line_2" required>
              </div>
              <div class="form-group">
                <label for="billing-city">City</label>
                <input type="text" class="form-control" id="billing-city" v-model="checkoutData.billing_address.city" required>
              </div>
              <div class="form-group">
                <label for="billing-county">County</label>
                <input type="text" class="form-control" id="billing-county" v-model="checkoutData.billing_address.county" required>
              </div>
              <div class="form-group">
                <label for="billing-post-code">Post Code</label>
                <input type="text" class="form-control" id="billing-post-code" v-model="checkoutData.billing_address.postcode" required>
              </div>
              <div class="form-group">
                <label for="billing-country">Country</label>
                <input type="text" class="form-control" id="billing-country" v-model="checkoutData.billing_address.country" required>
              </div>
              <!-- Billing Address -->
            </div>
            <div class="col-md-6">
              <h5>Shipping Address</h5>
              <hr/>
              <!-- Shipping Address -->
              <div class="form-group">
                <label for="shipping-first-name">First Name</label>
                <input type="text" class="form-control" id="shipping-first-name" v-model="checkoutData.shipping_address.first_name" required>
              </div>
              <div class="form-group">
                <label for="shipping-last-name">Last Name</label>
                <input type="text" class="form-control" id="shipping-last-name" v-model="checkoutData.shipping_address.last_name" required>
              </div>
              <div class="form-group">
                <label for="shipping-line-1">Address Line 1</label>
                <input type="text" class="form-control" id="shipping-line-1" v-model="checkoutData.shipping_address.line_1" required>
              </div>
              <div class="form-group">
                <label for="shipping-line-2">Address Line 2</label>
                <input type="text" class="form-control" id="shipping-line-2" v-model="checkoutData.shipping_address.line_2" required>
              </div>
              <div class="form-group">
                <label for="shipping-city">City</label>
                <input type="text" class="form-control" id="shipping-city" v-model="checkoutData.shipping_address.city" required>
              </div>
              <div class="form-group">
                <label for="shipping-county">County</label>
                <input type="text" class="form-control" id="shipping-county" v-model="checkoutData.shipping_address.county" required>
              </div>
              <div class="form-group">
                <label for="shipping-post-code">Post Code</label>
                <input type="text" class="form-control" id="shipping-post-code" v-model="checkoutData.shipping_address.postcode" required>
              </div>
              <div class="form-group">
                <label for="shipping-country">Country</label>
                <input type="text" class="form-control" id="shipping-country" v-model="checkoutData.shipping_address.country" required>
              </div>
              <!-- Shipping Address -->
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <button class="btn btn-primary" v-on:click.prevent="checkout()">Checkout!</button>
            </div>
          </div>

        </form>
      </div>
    </div>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'product',
  data () {
    return {
      errors: '',
      checkoutData: {
        customer: {
          name: 'aa',
          email: 'aa@aa.com'
        },
        shipping_address: {
          first_name: 'John',
          last_name: 'Doe',
          line_1: '2nd Floor British India House',
          line_2: '15 Carliol Square',
          city: 'Newcastle Upon Tyne',
          postcode: 'NE1 6UF',
          county: 'Tyne & Wear',
          country: 'United Kingdom'
        },
        billing_address: {
          first_name: 'John',
          last_name: 'Doe',
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
      MoltinService.checkout(this.checkoutData).then((response) => {
        this.$router.push('/payments/' + response.data.id)
      }).catch((err) => {
        this.errors = 'There was a problem checking out' + err
      })
    }
  }
}
</script>
<style></style>
