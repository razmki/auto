var HeadnavController = function ($scope,$state, $rootScope) {
	$scope.routes = [{name : 'Главная', state : 'home.main'}, {name : 'Доставка и оплата', state : 'home.send'},
	{name : 'Контакты', state: 'home.contacts'}, {name : 'Заявка на запчасть', state : 'home.request'},
	{name : 'Гарантия', state : 'home.garant'} ];
	$scope.go = function(state){
		$state.go(state);
	}
	$scope.currentNavItem = 'Главная';
}

app.component('headnav', {
	templateUrl : 'components/headnav.component/index.html',
	controller : HeadnavController
})
