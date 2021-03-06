const CartController = require('./controllers/cartController');

module.exports = function (server, opts, done) {
  server.post('/cart', CartController.create);
  server.get('/cart/:token/:currency', CartController.get);
  server.post('/cart/:token/checkout', CartController.checkout);
  server.post('/cart/item', CartController.deleteItemCart);
  server.post('/cart/update', CartController.updateItemCart);
  done();
}