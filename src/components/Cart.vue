<template>
<div>
 <cartHeader></cartHeader>
 <section class="cart">
        <div class="content">
            <form class="cart-listing" method="post" novalidate>
                <div class="cart-list-headings">
                    <div class="cart-product-header">Product</div>
                    <div class="cart-header-group">
                        <div class="cart-empty-header"></div>
                        <div class="cart-quantity-header">Quantity</div>
                        <div class="cart-price-header">Price</div>
                    </div>
                </div>
                <div class="cart-item">
                    <div class="product-image" aria-hidden="true">
                        <img src="img/products/lamp7-trans.png" alt="Crown - A unique black lamp with six metal legs forming a nest at the top, creating a crown of six lights." style="background: #d9d9d9;"/>
                    </div>
                    <div class="cart-details">
                        <div class="cart-title">
                            <h3>Crown</h3>
                        </div>
                        <div class="cart-quantity">
                            <div class="quantity-input">
                                <p class="hide-content">Product quantity.</p>
                                <p class="hide-content">Change the quantity by using the buttons, or alter the input directly.</p>
                                <button type="button" class="decrement number-button"><span class="hide-content">Decrement quantity</span><span aria-hidden="true">-</span></button>
                                <input class="quantity" name="number" type="number" min="1" max="10" value="1" size="2">
                                <button type="button" class="increment number-button"><span class="hide-content">Increment quantity</span><span aria-hidden="true">+</span></button>
                            </div>
                        </div>
                        <div class="cart-price">
                            <p class="price"><span class="item-price hidden"><span class="hide-content">Price per item </span>$<span class="product-price">475</span><span aria-hidden="true"> / </span></span><span class="hide-content">Product subtotal</span>$<span class="total-product-price">475</span></p>
                        </div>
                    </div>
                    <div class="cart-delete">
                        <button class="remove" type="button"><span class="hide-content">Delete item</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.55635 15.55635">
                                <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(7.77817 -3.22183) rotate(45)"/>
                                <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(18.77817 7.77817) rotate(135)"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="cart-item">
                    <div class="product-image" aria-hidden="true">
                        <img src="img/products/lamp8-trans.png" alt="Green mod - A green tripod floor lamp with a modern flair." style="background: #d7f0ea;"/>
                    </div>
                    <div class="cart-details">
                        <div class="cart-title">
                            <h3>Green mod</h3>
                        </div>
                        <div class="cart-quantity">
                            <div class="quantity-input">
                                <p class="hide-content">Product quantity.</p>
                                <p class="hide-content">Change the quantity by using the buttons, or alter the input directly.</p>
                                <button type="button" class="decrement number-button"><span class="hide-content">Decrement quantity</span><span aria-hidden="true">-</span></button>
                                <input class="quantity" name="number" type="number" min="1" max="5" value="2" size="2">
                                <button type="button" class="increment number-button"><span class="hide-content">Increment quantity</span><span aria-hidden="true">+</span></button>
                            </div>
                        </div>
                        <div class="cart-price">
                            <p class="price"><span class="item-price"><span class="hide-content">Price per item </span>$<span class="product-price">400</span><span aria-hidden="true"> / </span></span><span class="hide-content">Product subtotal</span>$<span class="total-product-price">800</span></p>
                        </div>
                    </div>
                    <div class="cart-delete">
                        <button class="remove" type="button"><span class="hide-content">Delete item</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.55635 15.55635">
                                <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(7.77817 -3.22183) rotate(45)"/>
                                <rect fill="currentColor" x="-2.22183" y="6.77817" width="20" height="2" transform="translate(18.77817 7.77817) rotate(135)"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="total-price">
                    Subtotal<span class="hide-content"> of all products</span> <span class="price">$1275</span>
                </div>
                <button type="submit" class="submit">Checkout</button>
            </form>
        </div>
    </section>
</div>
</template>
<script>
import MoltinService from '../services/moltin.js'
import CartHeader from './ProductHeader.vue'

export default {
  name: 'product',
  data () {
    return {
      cartItems: {}
    }
  },
  beforeMount () {
    MoltinService.getCart().then((response) => {
      this.cartItems = response
    })
  },
  components: {
    'cartHeader': CartHeader
  }
}
</script>
<style></style>
