(function () {
    'use strict';

    angular.module('laravelApp', ['ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/partials/main.html',
            controller: 'MainCtrl'
        }).when('/login', {
            templateUrl: 'app/partials/login.html',
            controller: 'LoginCtrl'
        }).when('/register', {
            templateUrl: 'app/partials/register.html',
            controller: 'LoginCtrl'
        }).when('/forgot', {
            templateUrl: 'app/partials/user/forgot.html',
            controller: 'LoginCtrl'
        }).when('/user/confirm/:token', {
            templateUrl: 'app/partials/user/confirm.html',
            controller: 'ConfirmCtrl'
        }).when('/user/reset/:token', {
            templateUrl: 'app/partials/user/reset.html',
            controller: 'ResetCtrl'
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
    }).run(function ($rootScope, $http, CSRF_TOKEN) {
        $http.defaults.headers.common['csrf_token'] = CSRF_TOKEN;
    });
}());