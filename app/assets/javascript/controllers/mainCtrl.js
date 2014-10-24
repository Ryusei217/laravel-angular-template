(function () {
    'use strict';

    angular.module('laravelApp').controller('MainCtrl', function ($scope, $location, LoginSrv) {
        $scope.title = "Hello World!";
    });
}());