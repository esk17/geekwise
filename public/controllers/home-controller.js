(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

		app.controller('home', function($scope, ProductService) {

			$scope.FeaturedProducts = new Array();

				ProductService.getFeaturedProducts().then(function(response) {

					angular.forEach(response.data, function(Product) {

							$scope.FeaturedProducts = response.data;
						});

				});
		});


})(window.angular);