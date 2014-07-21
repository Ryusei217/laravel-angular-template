(function () {
    'use strict';

    angular.module('laravelApp').controller('LoginCtrl', function ($scope, $rootScope, $routeParams, $sanitize, $location, LoginSrv) {
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
    
    angular.module('laravelApp').controller('ConfirmCtrl', function ($scope, $routeParams, LoginSrv) {
        $scope.alerts = [
        ];
        
        $scope.message = LoginSrv.confirm({
            token: $routeParams.token
        }, function (data) {
            $scope.alerts.push({
                type : 'success',
                message: data.message
            });
            
        }, function (error) {
            $scope.alerts.push({
                type : 'danger',
                message: error.data.message
            });
        });
    });
}());