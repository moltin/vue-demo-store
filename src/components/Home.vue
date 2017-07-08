<template>
<div>
    <homeHeaderComponent></homeHeaderComponent>
    <homeCategoriesComponent></homeCategoriesComponent>
</div>
</template>

<script>
import MoltinService from '../services/moltin.js'
import HomeHeader from './HomeHeader.vue'
import HomeCategories from './HomeCategories.vue'
import TopPicks from './TopPicks.vue'

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
  },
  components: {
    'homeHeaderComponent': HomeHeader,
    'homeCategoriesComponent': HomeCategories,
    'topPicksComponent': TopPicks
  }
}
</script>
