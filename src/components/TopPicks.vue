<template>
  <section class="top-picks">
      <div class="content">
          <h2>Top Picks</h2>
          <div class="product-list">
              <a class="product-item new">
                  <div class="product-image" style="background: #e2d1bf;">
                      <img src="" alt="Black mod - A black tripod floor lamp with a modern flair."/>
                  </div>
                  <div class="overlay hidden" aria-hidden="true">
                      <div class="overlay-background" style="background: #ad9d8b;"></div>
                      <div class="overlay-content">
                          <div class="title"></div>
                          <div class="price"></div>
                      </div>
                  </div>
              </a>
          </div>
      </div>
  </section>
</template>

<script>
// import MoltinService from '../services/moltin.js'

export default {
  name: 'top picks',
  data () {
    return {
      products: {}
    }
  },
  beforeMount () {
    // Get products with a relationship to top pics catagory
  }
}
</script>
