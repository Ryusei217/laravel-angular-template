(function () {
    'use strict';

    angular.module('laravelApp', ['ngResource', 'ngSanitize', 'ngRoute']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/partials/main.html',
            controller: 'MainCtrl'
        }).when('/login', {
            templateUrl: 'app/partials/login.html',
            controller: 'LoginCtrl'
        }).when('/comments', {
            templateUrl: 'app/partials/comments/list.html',
            controller: 'CommentCtrl'
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }).config(function ($httpProvider) {
        var interceptor = function ($rootScope, $location, $q) {
            var success = function (response) {
                return response;
            };
            
            var error = function (response) {
                if (response.status === 401) {
                    delete sessionStorage.authenticated;
                    $location.path('/login');
                }
                return $q.reject(response);
            };
            
            return function (promise) {
                return promise.then(success, error);
            };
        };
        
        $httpProvider.responseInterceptors.push(interceptor);
    });
}());