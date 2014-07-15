(function () {
    'use strict';

    angular.module('laravelApp').controller('LoginCtrl', function ($scope, $rootScope, $sanitize, $location, LoginSrv) {
        $scope.login = function () {
            LoginSrv.login({
                'email': $sanitize($scope.email),
                'password': $sanitize($scope.password)
            }, function (data) {
                toastr.success(data.message, data.status);
                sessionStorage.authenticated = true;
                $rootScope.logged = true;
                $location.path('/');
            }, function (error) {
                toastr.error(error.data.message, error.data.status);
            });
        };
        
        $scope.register = function () {
            LoginSrv.register({
                'username' : $sanitize($scope.account.username),
                'email' : $sanitize($scope.account.email),
                'password' : $sanitize($scope.account.password),
                'password_confirmation' : $sanitize($scope.account.password_confirmation)
            }, function (data) {
                $scope.account = {};
                toastr.success(data.message, data.status);
            }, function (error) {
                toastr.error(error.data.message, error.data.status);
            });
        };
    });
}());