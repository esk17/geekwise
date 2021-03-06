
(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('CartService', function($cookieStore, ProductService) {

		// Private items variable
		var items = {};

		// Angular factories return service objects
		var cart = {

			getItems: function() {
				var itemsCookie;
				// Returns items object
				if(!items.length) {
					itemsCookie  = $cookieStore.get('items');
					if(itemsCookie) {
						angular.forEach(itemsCookie, function(item, key) {
							ProductService.getProduct(key).then(function(response) {
								var product = response.data;
								product.quantity = item;
								items[product.guid] = product;
							});

						});
					}
				}
				return items;
			},

			addItem: function(item) {
				// Check if item already exists
				// If it exists, updates the quantity
				//if it doesn't exist, adds quantity property with value of 1 then
				// pushes the item onto the items array
				// items .value is
				if(!items[item.guid]) {
					item.quantity = 1;
					items[item.guid] = item;
				} else {
					items[item.guid].quantity += 1;
					// items[item.guid.quantity = items[item.guid].quantity + 1
				}
				cart.updateItemsCookie();
				
			},

			removeItem: function(item_id) {
				// Removes an item from the items array
				// Can use angular.forEach(array, function(item, index to splice)
					delete items[item_id];

					cart.updateItemsCookie();

			},

			emptyCart: function() {
				// Sets items array to empty array
				items = {}; 
				$cookieStore.remove('items');

			},

			getItemCount: function() {
				var total = 0;
				angular.forEach(items, function(item){
					total += item.quantity;
				});
				return total;
			},

			getCartSubtotal: function() {
				// Return the item quantity times item price for each item in the array
				var total = 0;
				angular.forEach(items, function(item){
					var s = parseInt(item.quantity);
					var q = isNaN(s) ? 0 : s;
					var p = cart.getItemPrice(item);
					total += q * p;
				});
				return total; 
			},

			getCartTotal: function() {
				// Return the cartSubtotal plus shipping and handling
				return cart.getCartSubtotal();
			},
			updateItemsCookie: function() {

				var itemsCookie = {};
				angular.forEach(items, function(item, key) {
					itemsCookie[key] = item.quantity;
				});
				$cookieStore.put('items', itemsCookie);
			},
			getItemPrice: function(item) {
				return parseFloat(item.isSpecial ? item.specialPrice : item.price);

			}

		};

		return cart;

	});

})(window.angular);