app.controller('ResultadoCtrl', ['$scope','$stateParams','$http', function($scope,$stateParams,$http){
	
	$http.get('https://api.mercadolibre.com/sites/MLA/search',{ 
		params : { q : $stateParams.query, limit : 10 }
	}).then(function(response){
		$scope.items = response.data.results;
	}, function(error){
		console.log(error);
	});

}]);