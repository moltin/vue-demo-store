<template>
<div>
  <categories-component></categories-component>
  <top-picks-component></top-picks-component>
</div>
</template>

<script>
import TopPicks from './TopPicks.vue'
import HomeCategories from './HomeCategories.vue'

export default {
  name: 'home',
  components: {
    'top-picks-component': TopPicks,
    'categories-component': HomeCategories
  }
}

</script>
