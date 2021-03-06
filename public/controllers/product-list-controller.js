(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

app.controller('ProductList', function($scope, ProductService) {

	var errorCallback = function(reason) {
		$scope.errorMessage = reason.statusText;
	}; 


	
		ProductService.getProducts().then(
			function(response) {
				$scope.products = response.data;
		
		}, errorCallback
		
		);

		
			ProductService.getProductsFilters().then(
				function(response) {
					$scope.filters = response.data;
				}, errorCallback

			);

		// executed possibly before http completes


	
});

})(window.angular);