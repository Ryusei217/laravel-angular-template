(function () {
    'use strict';

    angular.module('laravelApp', ['ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap']).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        }).when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'LoginCtrl'
        }).when('/forgot', {
            templateUrl: 'partials/user/forgot.html',
            controller: 'LoginCtrl'
        }).when('/user/confirm/:token', {
            templateUrl: 'partials/user/confirm.html',
            controller: 'ConfirmCtrl'
        }).when('/user/reset/:token', {
            templateUrl: 'partials/user/reset.html',
            controller: 'ResetCtrl'
        }).when('/comments', {
            templateUrl: 'partials/comments/list.html',
            controller: 'CommentCtrl'
        }).otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode(true);
    }).config(function ($httpProvider) {
        $httpProvider.interceptors.push('error401Interceptor');
    }).factory('error401Interceptor', function ($q, $location) {
        return {
            responseError: function (response) {
                if (response.status === 401) {
                    delete sessionStorage.authenticated;
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }).run(function ($rootScope, $http, CSRF_TOKEN) {
        $http.defaults.headers.common['csrf_token'] = CSRF_TOKEN;
    });
}());