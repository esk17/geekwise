(function(angular){

	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/home',
				template: '<h1>Home</h1>'
			})
			.state('products', {
				url: '/products',
				controller: 'ProductList',
				templateUrl: 'views/product-list.html'
			})
			.state('about', {
				url: '/about',
				template: '<h1>About</h1>'
			})
			.state('contact', {
				url: '/contact',
				template: '<h1>Contact</h1>'
			});
	
	});

})(window.angular);