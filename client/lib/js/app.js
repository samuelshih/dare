dare = angular.module('dareApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'lib/partials/dare.html',
        controller: 'DareCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });