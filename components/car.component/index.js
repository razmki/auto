var CarController = function ($state,$scope,$rootScope) {
	$scope.id = $state.params['id'];
	$rootScope.$broadcast('changeNavToDetails');
}
app.component('car', {
	templateUrl : 'components/car.component/index.html',
	controller : CarController
})
// app
//   .controller('GridCtrl', ['$scope', function ($scope) {
//     $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
//   }]);
