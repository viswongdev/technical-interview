const assert = require("assert");
const Checkout = require("./Checkout");

const checkout = new Checkout();

describe("checkout", function(){

	it ("This test will pass", function(){
		assert.equal(true, true);
	});

	it ("I can scan an item without an error being thrown", function(){
		assert.doesNotThrow(
			function() {
				checkout.scan("Apple");
			}
		);
	});

	it ("I can scan multiple items without an error being thrown", function(){
		assert.doesNotThrow(
			function() {
				checkout.scan("Apple");
				checkout.scan("Banana");
				checkout.scan("Flat White");
			}
		);
	});

	it ("get the total price 6.7", function(){
		assert.equal(checkout.getTotalPrice(), 6.7);
	});

	it ("empty the cart", function(){
		checkout.emptyCart();
		assert.equal(checkout.getTotalPrice(), 0);
	});

	it ("get a special offer", function(){
		checkout.emptyCart();
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		assert.equal(checkout.getTotalPrice(), 6.5);
	});

	it ("get multiple special offers", function(){
		checkout.emptyCart();
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		checkout.scan("Americano");
		assert.equal(checkout.getTotalPrice(), 13);
	});


});