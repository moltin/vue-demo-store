<template>
<div>
  <productsHeaderComponent></productsHeaderComponent>
   <section class="products">
        <div class="content">
            <div class="product-list">
                <a class="product-item" href="product.html" v-for="(product, val) in products">
                    <div class="product-image" style="background: #d9d9d9;">
                        <img :src="getProductImage(product)" alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights."/>
                    </div>
                    <div class="overlay">
                        <div class="overlay-background" style="background: #aaaaaa;"></div>
                        <div class="overlay-content">
                            <div class="title">{{ product.name }}</div>
                            <div class="price">{{ product.price }}</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
import MoltinService from '../services/moltin.js'
import ProductHeader from './ProductHeader.vue'

export default {
  data () {
    return {
      products: {}
    }
  },
  beforeMount () {
    MoltinService.getProducts().then((response) => {
      this.products = response
    })
  },
  methods: {
    getProductImage: (product) => {
      var placeholder = 'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050'
      try {
        var fileId = product.relationships.files.data[0].id
        var file = this.products.included.main_images.find(function (el) {
          return fileId === el.id
        })
        console.log(file.link.href)
        return file.link.href || placeholder
      } catch (e) {
        return placeholder
      }
    }
  },
  components: {
    'productsHeaderComponent': ProductHeader
  }
}
</script>
