<template>
  <div>
    <productHeaderComponent></productHeaderComponent>
    <section class="product">
      <div class="content">
        <div class="product-listing">
          <div class="product-image" >
            <img src="/static/img/products/lamp7-trans.png" alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." style="background: #d9d9d9;">
          </div>
          <div class="product-description">
                    <h2>Crown</h2>
                    <p class="manufacturer"><span class="hide-content">Manufactured </span>By <span class="word-mark">I<span class="love">Love</span>Lamp</span></p>
                    <p class="price"><span class="hide-content">Unit price </span>$475</p>
                    <div class="description">
                        <p class="hide-content">Product details:</p>
                        <p>Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.</p>
                    </div>
                    <form class="product" method="post" novalidate>
                        <div class="quantity-input">
                            <p class="hide-content">Product quantity.</p>
                            <p class="hide-content">Change the quantity by using the buttons, or alter the input directly.</p>
                            <button type="button" class="decrement number-button"><span class="hide-content">Decrement quantity</span><span aria-hidden="true">-</span></button>
                            <input class="quantity" name="number" type="number" min="1" max="10" value="1" size="2">
                            <button type="button" class="increment number-button"><span class="hide-content">Increment quantity</span><span aria-hidden="true">+</span></button>
                        </div>
                        <button type="submit" class="submit">Add to cart</button>
                    </form>
                </div>
            </div>
            <div class="product-info">
                <div class="product-details">
                    <div class="header"><h3>Product details</h3></div>
                    <div class="details-body">
                        <div class="row">
                            <div class="label">Weight</div>
                            <div class="value">1.5kg</div>
                        </div>
                        <div class="row">
                            <div class="label">Finish</div>
                            <div class="value">Matt black</div>
                        </div>
                        <div class="row">
                            <div class="label">Material</div>
                            <div class="value">Steel & acrylic</div>
                        </div>
                        <div class="row">
                            <div class="label">Bulb type</div>
                            <div class="value">E27</div>
                        </div>
                        <div class="row">
                            <div class="label">Max Watt</div>
                            <div class="value">40W</div>
                        </div>
                        <div class="row">
                            <div class="label">Bulb Qty</div>
                            <div class="value">6</div>
                        </div>
                        <div class="row">
                            <div class="label">SKU</div>
                            <div class="value sku">CWLP100BLK</div>
                        </div>
                    </div>
                </div>
                <div class="product-details">
                    <div class="header"><h3>Dimensions (cm)</h3></div>
                    <div class="details-body">
                        <div class="row">
                            <div class="label">Height</div>
                            <div class="value">156</div>
                        </div>
                        <div class="row">
                            <div class="label">Width</div>
                            <div class="value">80</div>
                        </div>
                        <div class="row">
                            <div class="label">Depth</div>
                            <div class="value">80</div>
                        </div>
                    </div>
                </div>
                <div class="product-details">
                    <div class="header"><h3>Delivery & returns</h3></div>
                    <div class="details-body">
                        <div class="row">
                            <div class="label">Dispatch</div>
                            <div class="value">Within 2 weeks</div>
                        </div>
                        <div class="row">
                            <div class="label">Delivery</div>
                            <div class="value">$5.95</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Read the <a href="/">delivery and returns policy</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
import MoltinService from '../services/moltin.js'
import ProductHeader from './ProductHeader.vue'

export default {
  name: 'product',
  data () {
    return {
      product: {}
    }
  },
  beforeMount () {
    MoltinService.findBySlug(this.$route.params.slug).then((response) => {
      this.product = response
    })
  },
  methods: {
    addToCart: function (productId) {
      MoltinService.addToCart(productId)
    }
  },
  components: {
    'productHeaderComponent': ProductHeader
  }
}
</script>
