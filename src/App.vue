<template>
<!-- need some way to dynamically load the header heeya! -->
  <main role="main" id="container" class="main-container push">
    <router-view></router-view>
    <section class="mailing-list">
      <div class="content">
        <div class="mailing-list-content">
          <h2>Do you
            <span class="love">love</span> lamp?</h2>
          <p>Sign up to recieve
            <span class="word-mark">I
              <span class="love">Love</span>Lamp</span> product news, promotions and updates.</p>
          <form class="newsletter-form" method="post" novalidate>
            <input class="email" required="required" placeholder="Email address" name="email" type="email" aria-label="Email">
            <button type="submit" class="submit">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  </main>
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
