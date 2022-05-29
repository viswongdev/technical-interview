const assert = require("assert");
const Checkout = require("./Checkout");

describe("checkout", function(){

	it ("This test will pass", function(){
		assert.equal(true, true);
	});

	it ("I can scan an item without an error being thrown", function(){
		const checkout = new Checkout();
		assert.doesNotThrow(
			function() {
				checkout.scan("Apple");
			}
		);
	});

	it ("I can scan an apple, and then get the total price. it is 1", function(){
		const checkout = new Checkout();
		checkout.scan("Apple");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 1);
	});

	// it ("I can scan 3 apples, and then get the total price. it is 3", function(){
	// 	const checkout = new Checkout();
	// 	checkout.scan("Apple");
	// 	checkout.scan("Apple");
	// 	checkout.scan("Apple");
	// 	const totalPrice = checkout.getTotalPrice();
	// 	assert.equal(totalPrice, 3);
	// });

	it("I can scan a flat white, and then get the total price. it is 3.50", function() {
		const checkout = new Checkout();
		checkout.scan("Flat White");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 3.50);
	})

	it("I can scan a Americano, and then get the total price. it is 2.00", function() {
		const checkout = new Checkout();
		checkout.scan("Americano");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 2.00);
	})

	it("I can scan a banana, and then get the total price. it is 1.20", function() {
		const checkout = new Checkout();
		checkout.scan("Banana");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 1.20);
	})

	it("I can get the offer on Apples, if I buy 3 I only pay for 2", function() {
		const checkout = new Checkout();
		checkout.scan("Apple");
		checkout.scan("Apple");
		checkout.scan("Apple");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 2.00);
	})

	it("I can scan Bananas, it is 3.60", function() {
		const checkout = new Checkout();
		checkout.scan("Banana");
		checkout.scan("Banana");
		checkout.scan("Banana");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 3.60);
	})

	it("I can scan Bag, it is 0.05", function() {
		const checkout = new Checkout();
		checkout.scan("Bag");
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 0.05);
	})

	it("I can run the undo without error", function(){
		const checkout = new Checkout();
		assert.doesNotThrow(
			function() {
				checkout.undo();
			}
		);
	})

	it("I can undo the last scan of Banana, the total price should be 2", function() {
		const checkout = new Checkout();
		checkout.scan("Apple");
		checkout.scan("Apple");
		checkout.scan("Banana");
		checkout.undo();
		const totalPrice = checkout.getTotalPrice();
		assert.equal(totalPrice, 2.00);
	})

});