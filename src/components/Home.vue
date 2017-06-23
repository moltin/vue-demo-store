<template>
<div>
  <div class="collection">
      <div class="content">
          <h2 class="hide-content">Our collections</h2>
          <div class="collection-list">
              <a class="collection-item" href="collection.html" style="background: #d9d9d9;" v-for="(category, val) in categories.data">
                  <h3>{{ category.name }}<span class="hide-content"> lamps</span></h3>
                  <img src="static/img/products/lamp7-trans.png" alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." aria-hidden="true"/>
                  <div class="overlay fake-btn hidden" aria-hidden="true" style="background: #4d4d4d">Shop <span class="hide-content">our unique collection </span>now</div>
              </a>
          </div>
      </div>
  </div>
  <section class="top-picks">
      <div class="content">
          <h2>Top Picks</h2>
          <div class="product-list" v-if="collection.included.products">
              <a class="product-item new" v-for="(product, val) in collection.included.products">
                  <div class="product-image" style="background: #e2d1bf;">
                    {{ getProductImage(product) }}
                      <img src="" alt="Black mod - A black tripod floor lamp with a modern flair."/>
                  </div>
                  <div class="overlay hidden" aria-hidden="true">
                      <div class="overlay-background" style="background: #ad9d8b;"></div>
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

export default {
  name: 'home',
  data () {
    return {
      categories: {},
      collection: {}
    }
  },
  beforeMount () {
    MoltinService.getHomepageCategories().then((response) => {
      this.categories = response
      console.log(this.categories)
    })
    MoltinService.getCollection('79e0c0ee-df47-43b7-b81e-e4e4969de530').then((response) => {
      this.collection = response
      console.log(this.collection)
    })
  },
  methods: {
    getProductImage: function (product) {
      try {
        var fileId = product.relationships.files.data['0'].id

        MoltinService.getProductFiles(fileId).then((response) => {
          console.log(response.data.link.href)
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}

</script>
