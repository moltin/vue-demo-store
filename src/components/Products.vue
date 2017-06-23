<template>
      <section class="products">
          <div class="content">
              <div class="product-list">
                  <a class="product-item" href="product.html" v-for="(product, key) in products.data">
                      <div class="product-image" style="background: #d9d9d9;">
                        <router-link :to="'/products/' + product.slug">
                          <img :src="getProductThumb(product)" alt="">
                        </router-link>
                      </div>
                      <div class="overlay hidden" aria-hidden="true">
                          <div class="overlay-background" style="background: #aaaaaa;"></div>
                          <div class="overlay-content">
                              <div class="title">{{ product.name }}</div>
                              <div class="price">{{ product.price.amount }}</div>
                          </div>
                      </div>
                  </a>
                </div>
              </div>
      </section>
</template>
<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'products',
  data () {
    return {
      products: {}
    }
  },
  beforeMount () {
    MoltinService.getHomepageProducts().then((response) => {
      this.products = response
      console.log(this.products)
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
