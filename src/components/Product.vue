<template>
    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">
        <div class="row">
          <div class="col-md-5 product-image">
            <img :src="product.included.files[0].link.href" alt="">
          </div>
          <div class="col-md-7 product-data">
            <h2>{{ product.data[0].name }}</h2>
            <p class="price">{{ product.data[0].meta.display_price.with_tax.formatted }}</p>
            <hr />
            <p>{{ product.data[0].description }}</p>
            <p><a href="#" class="btn btn-primary" v-on:click.prevent="addToCart(product.data[0].id)">Add to cart</a></p>
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
      product: {}
    }
  },
  beforeMount () {
    MoltinService.findBySlug(this.$route.params.slug).then((response) => {
      this.product = response
    })
  },
  methods: {
    addToCart: function (productId) {
      MoltinService.addToCart(productId)
    }
  }
}
</script>
<style scoped>
  h2 {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-data {
    text-align: left;
    padding-top: 80px;
  }

  .price {
    font-weight: bold;
  }

  .btn-primary {
    background-color: #2691C7;
    border-color: #2691C7;
  }

  .product-image img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
