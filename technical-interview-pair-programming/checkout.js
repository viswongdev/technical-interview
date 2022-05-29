module.exports = function(){

	let totalPrice = 0;

	const prices = {
		"Apple": 100,
		"Flat White": 350,
		"Americano": 200,
		"Banana": 120,
		"Bag": 5,
	};

	let appleCounter = 0;
	let mostRecentPrice = 0;

	return {
		scan: function(sku){
			if (sku === "Apple") appleCounter++;
			totalPrice += prices[sku];
			mostRecentPrice = prices[sku];
		},
		getTotalPrice: function(){
			let shouldWeApplyADiscountOnApples = appleCounter === 3;

			if (shouldWeApplyADiscountOnApples) {
				totalPrice = totalPrice - prices["Apple"];
			}

			return totalPrice/100;
		},
		undo: function(){
			totalPrice = totalPrice - mostRecentPrice;
		}
	}
};