(function () {
    'use strict';

    angular.module('laravelApp', [
      'ngResource',
      'ngSanitize',
      'ngRoute'
    ])
      .config(function ($routeProvider, $locationProvider) {
          $routeProvider
            .when('/', {
                templateUrl: 'app/partials/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

          $locationProvider.html5Mode(true);
      });
}());