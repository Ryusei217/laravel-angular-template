(function () {
    'use strict';

    angular.module('laravelApp').controller('MainCtrl', function ($scope, $location, LoginSrv) {
        $scope.title = "Hello World!";
        
        $scope.logout = function () {
            LoginSrv.logout({}, function () {
                delete sessionStorage.authenticated;
                $location.path('/login');
            });
        };
    });
}());