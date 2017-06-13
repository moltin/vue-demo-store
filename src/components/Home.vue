<template>

  <div>
    <div id="slider"></div>

    <div class="row">
      <div class="col-md-8 offset-md-2 text-center">

        <div class="row">

          <div class="col-md-3 product" v-for="(product, key) in products.data">
            <div class="product-image">
              <router-link :to="'/products/' + product.slug">
                <img :src="getProductThumb(product)" alt="">
              </router-link>
            </div>
            <div class="product-info">
              <h2>
                <router-link :to="'/products/' + product.slug">
                  {{ product.name }}
                </router-link>
              </h2>
              <p>{{ product.meta.display_price.with_tax.formatted }}</p>
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
  name: 'home',
  data () {
    return {
      products: {}
    }
  },
  beforeMount () {
    MoltinService.getHomepageProducts().then((response) => {
      this.products = response
    })
  },
  methods: {
    getProductThumb: function (product) {
      var placeholder = 'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050'
      try {
        var fileId = product.relationships.files.data[0].id

        var file = this.products.included.files.find(function (el) {
          return fileId === el.id
        })

        return file.link.href || placeholder
      } catch (e) {
        return placeholder
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #slider {
    margin-top: 2px;
    height: 600px;
    background: #f2f2f2 url(/static/hero.jpeg);
    background-size: cover;
    background-position: top;
  }

  .product {
    padding: 30px;
  }

  .product-info {
    text-align: left;
  }

  .product-info h2 {
    font-weight: normal;
    font-size: 1em;
  }

  .product-info h2 a {
    color: #292b2c
  }

  .product-info p {
    font-size: 0.8em;
    font-weight: bold;
  }

  .product-image img {
    max-height: 100%;
    max-width: 100%;
  }
</style>
