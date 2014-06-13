
(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('CartService', function($http) {

		// Private items variable
		var items = [];

		// Angular factories return service objects
		return {

			getItems: function() {
				// Returns items array
			},

			addItems: function(item) {
				// Check if item already exists
				// If it exists, updates the quantity
				//if it doesn't exist, adds quantity property with value of 1 then
				// pushes the item onto the items array
			
			},

			updateItem: function(item) {
				// Updates the quantity of an item

			},

			removeItem: function(item_id) {
				// Removes an item from the items array
				// Can use angular.forEach(array, function(item, index to splice)

			},

			emptyCart: function() {
				// Sets items array to empty array

			},

			getItemCount: function() {
				var total = 0;
				angular.forEach(items, function(item){
					total += item.quantity;
				});
				return total;
			};

			getCartSubtotal: function() {
				// Return the item quantity times item price for each item in the array
				var total = 0;
				angular.forEach 
			},

			getCartTotal: function() {
				// Return the cartSubtotal plus shipping and handling
			}

		};

	});

})(window.angular);