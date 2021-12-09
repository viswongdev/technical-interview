module.exports = function(){
	// pretending the data from the database
	let itemsList = [
		{
			name: 'Apple',
			price: 1
		},
		{
			name: 'Banana',
			price: 1.2
		},
		{
			name: 'Flat White',
			price: 3.5
		},
		{
			name: 'Americano',
			price: 2
		}
	]

	// seperating special offer list for frequent amendment in the future
	let specialOfferList = [
		{
			name: 'Banana',
			amount: 3,
			discount: 1.2
		},
		{
			name: 'Americano',
			amount: 4,
			discount: 1.5
		},
	]

	return {
		scan: function(_item){
			itemsList.find(item => {
				if (item.name === _item) this.cart.push(item);
			});
		},
		cart: [],
		emptyCart: function(){
			this.cart.length = 0;
		},
		getTotalPrice: function(){
			let totalPrice = 0;
			this.cart.map((item) => totalPrice += item.price);
			return totalPrice - this.getSpecialOffer();
		},
		getSpecialOffer: function(){
			let totalDiscount = 0;
			specialOfferList.map((specialOffer) => {
				let totalAmount = 0;
				this.cart.map((item) => {
					if (item.name === specialOffer.name) totalAmount++;
				});
				while (totalAmount >= specialOffer.amount) {
					totalDiscount += specialOffer.discount;
					totalAmount -= specialOffer.amount;
				}
			});
			return totalDiscount;
		}

	}
};