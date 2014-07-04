(function () {
    'use strict';

    angular.module('laravelApp').controller('LoginCtrl', function ($scope, $sanitize, $location, LoginSrv) {
        $scope.login = function () {
            LoginSrv.login({
                'email': $sanitize($scope.email),
                'password': $sanitize($scope.password)
            }, function () {
                $scope.flash = '';
                sessionStorage.authenticated = true;
                $location.path('/');
            }, function (response) {
                $scope.flash = response.data.flash;
            });
        };
    });
}());