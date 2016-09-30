var MainController = function ($scope, $rootScope) {
	$scope.grid = [[{name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}],
	[{name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}],
	[{name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}],
	[{name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}],
	[{name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}, {name : "W169 A-class", year: "2004-2012"}]
	];
	$scope.currentNav = function() {
		$rootScope.$broadcast('changeNavToDetails');
	}
}
app.component('main', {
	templateUrl : 'components/main.component/index.html',
	controller : MainController
})

// app
//   .controller('GridCtrl', ['$scope', function ($scope) {
//     $scope.grid = [[1,2,3],[4,5,6],[7,8,9]];
//   }]);
