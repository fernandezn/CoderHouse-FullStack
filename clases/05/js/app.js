var app = angular.module('meliApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	
	$stateProvider.state('buscador',{
		url 		: "/",
		templateUrl : "templates/buscador.html",
		controller  : "BuscadorCtrl"
	})
	.state('resultado',{
		url 		: "/resultado/:query",
		templateUrl : "templates/resultado.html",
		controller  : "ResultadoCtrl"
	});

	$urlRouterProvider.otherwise("/");

}]);