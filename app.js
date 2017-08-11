var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'main.html',
		controller: 'mainController'
	})
	.when('/about',{
		templateUrl: 'about.html',
		controller: 'mainController'
		
		
	})
	.when('/about',{
		templateUrl: 'search.html',
		controller: 'searchController'
		
		
	});
	
	
});
