<template>
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <div class="row">
          <div class="col-md-6 offset-md-2">
            <table>
              <tr v-for="item in cartItems.data">
                <td>
                  {{ item.name }}
                </td>
                <td>
                  <input type="text" v-model="item.quantity"/>
                </td>
              </tr>
            </table>
            <router-link :to="'/checkout'" class="btn btn-primary">Checkout</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'product',
  data () {
    return {
      cartItems: {}
    }
  },
  beforeMount () {
    MoltinService.getCart().then((response) => {
      this.cartItems = response
    })
  }
}
</script>
<style></style>
