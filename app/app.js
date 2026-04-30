angular
  .module('myApp', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
      })
      .otherwise({ redirectTo: '/' });
  }])

  .controller('NavController', ['$scope', function ($scope) {
    // Nav logic here
  }]);
