<template>
    <div>
      <div class="ui warning message" v-if="cartItems.data.length == 0">
        <div class="header">Your cart is empty</div>
        <p>You'll need to add some items to the cart before you can checkout.</p>
      </div>

      <div v-if="cartItems.data.length > 0 || true">
        <div class="ui divided items">
          <div class="item" v-for="item in cartItems.data">
            <div class="ui small image">
              <img v-bind:src="item.image.href" alt="">
            </div>
            <div class="content">
              <div class="header">{{ item.name }}</div>
              <div class="meta">{{ item.quantity }}x {{ item.meta.display_price.with_tax.value.formatted }}</div>
              <button class="ui basic icon right floated button" role="button" v-on:click.prevent="removeFromCart(item.id)">
                <i aria-hidden="true" class="remove icon"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="ui divider"></div>

        <div class="ui large clearing segment">
          <strong>Sub total:</strong> {{ cartItems.meta.display_price.with_tax.formatted }}
          <span>
            <router-link :to="'/checkout'" class="ui black right floated button">Checkout</router-link>
          </span>
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
      cartItems: {
        data: []
      }
    }
  },
  beforeMount () {
    MoltinService.getCart().then((response) => {
      this.cartItems = response
    })
  },
  methods: {
    removeFromCart (itemId) {
      MoltinService.removeFromCart(itemId).then((response) => {
        this.cartItems = response
      })
    }
  }
}
</script>
<style></style>
