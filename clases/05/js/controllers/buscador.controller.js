app.controller('BuscadorCtrl', ['$scope','$state', function($scope,$state){

	$scope.buscarQuery = function(){
		if ($scope.query.length > 3){
			$state.go('resultado',{ query : $scope.query });
		}
	}

}])