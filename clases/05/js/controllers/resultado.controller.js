app.controller('ResultadoCtrl', ['$scope','$stateParams','$http', function($scope,$stateParams,$http){

	var apiURL = 'https://api.mercadolibre.com/sites/MLA/search?q=' + $stateParams.query;
	
	$http.get(apiURL).then(function(response){
		console.log(response.data.results);
	}, function(error){
		console.log(error);
	});

}]);