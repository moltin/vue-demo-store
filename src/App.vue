<template>
  <div id="app">
    <div id="top-bar" class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-md-4 menu"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4 text-right">
            <router-link to="/cart">
              Cart ({{ cartItems.data.length }} items)
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MoltinService from './services/moltin.js'

export default {
  name: 'app',
  data () {
    return {
      cartItems: {
        data: []
      }
    }
  },
  beforeMount () {
    MoltinService.getCart().then((response) => {
      this.cartItems = response
    })
  }
}
</script>

<style>
  #app {
    font-size: 0.9em;
  }

  #top-bar {
    background-color: #C0AAAA;
    color: #fff;
    padding: 15px 25px;
  }

  #top-bar a {
    padding: 0 10px;
    color: #fff;
  }

  #top-bar .menu a:first-child {
    padding-left: 0;
  }

  .btn-primary {
    background-color: #C0AAAA;
    border-color: #C0AAAA;
  }
</style>
