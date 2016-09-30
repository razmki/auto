var HeadnavController = function ($scope,$state, $rootScope) {
	$scope.routes = [{name : 'Главная', state : 'home.main'}, {name : 'Запчасти', state : 'home.details'} , {name : 'Контакты', state: 'home.contacts'} ];
	$scope.go = function(state){
		$state.go(state);
	}
	$scope.currentNavItem = 'Главная';

	$scope.$on('changeNavToDetails', function(){
		$scope.currentNavItem = 'Запчасти';
	})
}

app.component('headnav', {
	templateUrl : 'components/headnav.component/index.html',
	controller : HeadnavController
})
