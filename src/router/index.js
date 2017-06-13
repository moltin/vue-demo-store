import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import Checkout from '@/components/Checkout'
import Payment from '@/components/Payment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/products/:slug',
      name: 'Product',
      component: Product
    },
    {
      path: '/payments/:orderId',
      name: 'Payment',
      component: Payment
    }
  ]
})
