<template>

  <div>
    <div class="ui items" v-for="product in products.data" :key="product.id">
      <div class="item">
        <router-link :to="'/products/' + product.slug" class="ui small image">
          <img :src="getProductThumb(product)" alt="">
        </router-link>
        <div class="content">
          <router-link :to="'/products/' + product.slug" class="header">
            {{ product.name }}
          </router-link>
          <div class="meta">{{ product.meta.display_price.with_tax.formatted }}</div>
          <div class="description">{{ product.description }}</div>
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
        var fileId = product.relationships.main_image.data.id

        var file = this.products.included.main_images.find(function (el) {
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
</style>
