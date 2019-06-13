<template>
  <div>
    <div class="ui items">
      <div class="item">
        <div class="ui medium image">
          <img v-if="product.data" :src="product.included.main_images[0].link.href" alt="">
        </div>
        <div class="content">
          <div v-if="product.data" class="header">{{ product.data[0].name }}</div>
          <div class="description">
            <p v-if="product.data">{{ product.data[0].meta.display_price.with_tax.formatted }}</p>
            <div v-if="product.data" class="ui label">SKU: {{ product.data[0].sku }}</div>
          </div>
            <div class="extra">
              <div class="ui action input">
                <input type="number" placeholder="Quantity" v-model="qty">
                <button class="ui orange button" role="button" v-on:click.prevent="addToCart(product.data[0].id, qty)">
                  <i aria-hidden="true" class="plus cart icon"></i>Add to Cart
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 class="ui header">About this product</h3>
    <p v-if="product.data">{{ product.data[0].description }}</p>
    <div class="ui divider"></div>
    <table class="ui celled table">
      <thead class="">
        <tr class="">
            <th colspan="2" class="">Attributes</th>
        </tr>
      </thead>
      <tbody class="">
        <tr class="">
            <td class="">Material</td>
            <td class=""></td>
        </tr>
        <tr class="">
            <td class="">Max watt.</td>
            <td class=""></td>
        </tr>
        <tr class="">
            <td class="">Bulb qty.</td>
            <td class=""></td>
        </tr>
        <tr class="">
            <td class="">Finish</td>
            <td class=""></td>
        </tr>
        <tr class="">
            <td class="">Fitting</td>
            <td class=""></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'product',
  data () {
    return {
      product: {},
      qty: 1
    }
  },
  beforeMount () {
    // TODO: This might not resolve before the template is built. Add a workaround.
    MoltinService.findBySlug(this.$route.params.slug).then((response) => {
      this.product = response
    })
  },
  methods: {
    addToCart: function (productId, qty) {
      MoltinService.addToCart(productId, qty).then((response) => {
        this.$emit('cart-updated', response)
        this.qty = 1
      })
    }
  }
}
</script>
<style>
</style>
