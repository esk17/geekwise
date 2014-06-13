(function(angular){

	var app = angular.module('MyStore');

	// msProductDetailsButton in html is ms-product-details-button
	app.directive('msProductDetailsButton', function(){

		return {
			// E for Element
			// A for Attribute
			// C for Class
			scope: {
				// 3 types of bindings for scope properties
				// @ which is a string
				// & Which is a one-way binding
				// = Which is a one-way binding
				// = Which is a two-way binding
				myVar: '@productId'
			}, // Isolated scope
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/product-details-button.html'
		};
	});

})(window.angular);