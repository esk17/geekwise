(function(angular) {

	var app = angular.module('MyStore');

	// Inject in the CartService
	app.controller('CartController', function($scope) {

		// Set the items on the scope to the items in the CarService
		$scope.items;

		$scope.addItem = function(item) {
			// Add the item using the CartService

		};

		$scope.removeItem = function(item) {
			// Remove the item using the CartService 

		};

		$scope.cartSubtotal = function() {
			// Returns the item using the CartService

		};

		$scope.cartTotal = function() {
			// Returns the cartTotal from the cartService

		}

	});

})(window.angular);