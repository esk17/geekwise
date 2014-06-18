(function(angular) {

	var app = angular.module('MyStore');

	// Inject in the CartService
	app.controller('CartController', function($scope, CartService) {

		// Set the items on the scope to the items in the CarService
		$scope.items = CartService.getItems();

		$scope.addItem = CartService.addItem;

		$scope.getItemCount = CartService.getItemCount;

		$scope.removeItem = CartService.removeItem;

		$scope.cartSubtotal = CartService.getCartSubtotal;

		$scope.cartTotal = CartService.getCartTotal;

		$scope.$watchCollection('items', function(newItems, oldItems) {
			if(newItems) {
				angular.forEach(newItems, function(item, key) {

					if(item.quantity == 0 || item.quantity == '') {
						CarService.removeItem(item.guid);
					}
				});
			}
		});

	});

})(window.angular);