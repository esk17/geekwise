(function(angular){

	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/home',
				controller: 'home',
				templateUrl: 'views/home.html'
			})
			.state('products', {
				url: '/products',
				controller: 'ProductList',
				templateUrl: 'views/product-list.html'
			})
			.state('product', {
                url: '/product/:id',
                controller: 'ProductDetail',
                templateUrl: 'views/product-detail.html'
			})
			.state('about', {
				url: '/about',
				template: '<h1>About</h1>'
			})
			.state('contact', {
				url: '/contact',
				template: '<h1>Contact</h1>'
			})
			.state('cart', {
				url: '/cart',
				controller: 'CartController',
				templateUrl: 'views/cart.html'
			})
	
	});

})(window.angular);