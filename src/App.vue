<template>
  <div id="app">
    <button id="nav-toggle" class="menu-btn nav-toggle light" aria-controls="nav-toggle" aria-expanded="false" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g class="hamburger-menu">
                <rect class="top" y="10" width="24" height="2" fill="currentColor"/>
                <rect class="middle" y="2" width="24" height="2" fill="currentColor"/>
                <rect class="bottom" y="18" width="24" height="2" fill="currentColor"/>
            </g>
        </svg>
    </button>
    <nav id="mobile-nav" role="navigation" class="pushy pushy-left" aria-hidden="true">
        <ul>
            <li class="pushy-link"><a href="products.html">Products</a></li>
            <li class="pushy-link"><a href="categories.html">Collections</a></li>
        </ul>
    </nav>
    <div class="site-overlay"></div>

    <header class="large-header push" style="background: url('../static/img/headers/header.png') no-repeat scroll center center/cover border-box">
        <div class="nav-container">
            <nav class="primary-nav light">
                <a href="products.html">Products</a>
                <a href="categories.html">Collections</a>
            </nav>
            <div class="logo">
                <a href="/" class="logo-link">
                    <span class="hide-content">I love lamp</span>
                    <img class="big-logo" src="../static/img/logo/ill-white.svg" alt="I love lamp logo" aria-hidden="true"/>
                    <img class="small-logo" src="../static/img/logo/ill-short-white.svg" alt="I love lamp logo" aria-hidden="true"/>
                </a>
            </div>
            <nav class="secondary-nav light">
                <a href="cart.html" class="cart"><span class="cart-name">Cart(</span><span class="cart-count">0</span><span class="cart-name">)</span></a>
            </nav>
        </div>
        <div class="header-container">
            <div class="content">
                <h1>I love carpet. I love desk.</h1>
                <a class="btn" href="#">I love lamp</a>
            </div>
        </div>
        <div class="down-arrow"><span class="hide-content"></span><object data="img/headers/down-arrow.svg" type="image/svg+xml" aria-hidden="true"></object></div>
    </header>
    <main role="main" id="container" class="main-container push">
      <router-view></router-view>
      <section class="mailing-list">
          <div class="content">
              <div class="mailing-list-content">
                  <h2>Do you love lamp?</h2>
                  <p>Sign up to recieve updates, promotions, new products and news from <span class="word-mark">I<span class="love">Love</span>Lamp</span></p>
                  <form class="newsletter-form" method="post" novalidate>
                      <input class="email" required="required" placeholder="Email address" name="email" type="email" aria-label="Email">
                      <button type="submit" class="submit">Sign up</button>
                  </form>
              </div>
          </div>
      </section>
    </main>
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
