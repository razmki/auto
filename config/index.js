app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$urlRouterProvider.when('/home', '/home/main')
		$stateProvider.state({
			name : 'home',
			url : '/home',
			component : 'home'
		});
		$stateProvider.state({
			name : 'home.main',
			url : '/main',
			component : 'main'
		});
		$stateProvider.state({
			name : 'home.car',
			url : '/details/car/:id',
			component : 'car'
		})
		$stateProvider.state({
			name : 'home.send',
			url : '/send',
			component : 'companyDetails'
		});
		$stateProvider.state({
			name : 'home.contacts',
			url : '/contacts',
			component : 'contacts'
		});		

	}])