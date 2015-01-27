sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/AddNewOrder', {
	templateUrl: 'scripts/angular/views/category.html',
	controller: 'AddOrderController'
      }).
      when('/index', {
	templateUrl: 'scripts/angular/views/index4.html',
	controller: 'AddOrderController'
      }).
      otherwise({
	redirectTo: '/index'
      });
}]);
