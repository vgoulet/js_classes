// file test/hello.test.js
  var expect = require('chai').expect;
  var summarizeBasket = require ('PanierProduits').summarizeBasket;

  let prices = {
    banana: 1,
    potato: 2,
    tomato: 3,
    cucumber: 4,
    salad: 5,
    apple: 6,
  };

  let products = ['tomato', 'cucumber', 'salad', 'potato', 'cucumber', 'potato', 'tomato', 'potato' ]

  describe('summarizeBasket', function() {
    it('Empty Basket should return 0 for each value', function() {
      var basket = summarizeBasket ({},[]);
      expect (basket.price).to.be.equal(0);
      expect (basket.countArticles).to.be.equal(0);
      expect (basket.countProducts).to.be.equal(0);
    });
    it ('Basket with only one product should return price of the product', function () {
      var basket = summarizeBasket(prices, ['cucumber']);
      expect (basket.price).to.be.equal(4);
      expect (basket.countArticles).to.be.equal(1);
      expect (basket.countProducts).to.be.equal(1);
    });
});
