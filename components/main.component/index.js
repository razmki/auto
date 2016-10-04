var MainController = function ($scope, $rootScope) {
	$scope.grid = [[{name : "W168 A-class", year: "1997-2004"}, {name : "W169 A-class", year: "2004-2012"}, {name : "W176 A-class", year: "2012-н.в."}],
	[{name : "W245 B-class", year: "2005-2012"}, {name : "W246 B-class", year: "2012-н.в."}, {name : "W202 С-class", year: "1993-2001"}],
	[{name : "W203 С-class", year: "2000-2006"}, {name : "W204 С-class", year: "2007-2014"}, {name : "W207 E-class", year: "2009-н.в."}],
	[{name : "W210 E-class", year: "1995-2003"}, {name : "W211 E-class", year: "2002-2009"}, {name : "W212 E-class", year: "2009-н.в."}],
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
