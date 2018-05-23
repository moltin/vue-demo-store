<template>
    <div>
      <div class="ui warning message" v-if="cart.data.length == 0">
        <div class="header">Your cart is empty</div>
        <p>You'll need to add some items to the cart before you can checkout.</p>
      </div>

      <div v-if="cart.data.length > 0">
        <div class="ui divided items">
          <div class="item" v-for="item in cart.data" :key="item.id">
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
          <strong>Sub total:</strong> {{ cart.meta.display_price.with_tax.formatted }}
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
  props: ['cart'],
  methods: {
    removeFromCart (itemId) {
      MoltinService.removeFromCart(itemId).then((response) => {
        this.$emit('cart-updated', response)
      })
    }
  }
}
</script>
<style></style>
