<template>
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
</template>

<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'categories view',
  data () {
    return {
      categories: {}
    }
  },
  beforeMount () {
    // Get products with a relationship to top pics catagory
    MoltinService.getHomepageCategories().then((response) => {
      this.categories = response
      console.log(this.categories)
    })
  }
}
</script>
