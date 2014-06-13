(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('ProductService', function($http) {

			// Angular factories return service objects
			return{
				
				// object literal
				getProduct: function(guid) {
					// Return the promise
					return $http.get('/api/product/'+guid);
				},

				getProducts: function() {
					// return the promise
					return $http.get('/api/products');
				},

				getProductsFilters: function() {
					//return the promise
					return $http.get('assets/json/product-filters.json');
				},
				getFeaturedProducts: function() {
					//return the promise
					return $http.get('/api/products?featured=true');
				}

		};

	});

})(window.angular);
