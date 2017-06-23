import { gateway as MoltinGateway } from '@moltin/sdk'

const Moltin = MoltinGateway({
  client_id: 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4'
})

export default {

  getProduct (uuid) {
    return Moltin.Products.Get(uuid)
  },

  getProductFiles (fileId) {
    return Moltin.Files.Get(fileId)
  },

  filterByCollection (collection) {
    return Moltin.Products.Filter({
      eq: {
        collection: collection
      }
    }).with('files').Limit(6).All()
  },

  getHomepageProducts () {
    return Moltin.Products.Filter({}).With('files').Limit(8).All()
  },

  getHomepageCollections () {
    return Moltin.Collections.All()
  },

  getHomepageCategories () {
    return Moltin.Categories.All()
  },

  getCollection (uuid) {
    return Moltin.Collections.With('products').Get(uuid)
  },

  findBySlug (slug) {
    return Moltin.Products.Filter({
      eq: {
        slug: slug
      }
    }).With(['files', 'brands']).Limit(1).All()
  },

  getCart () {
    return Moltin.Cart.Items()
  },

  addToCart (productId) {
    return Moltin.Cart.AddProduct(productId)
  },

  checkout (checkoutData) {
    return Moltin.Cart.Checkout(checkoutData)
  },

  pay (orderId, paymentData) {
    return Moltin.Orders.Payment(orderId, paymentData)
  }

}
