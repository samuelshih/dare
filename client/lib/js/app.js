dare = angular.module('dareApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/dare.html',
        controller: 'DareCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });