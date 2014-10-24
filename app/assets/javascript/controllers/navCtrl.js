(function () {
    'use strict';

    angular.module('laravelApp').controller('NavCtrl', function ($scope, $rootScope, $location, LoginSrv) {
        //Prevents re login on page reload
        $rootScope.logged = sessionStorage.authenticated;
        
        $scope.menu = [
            {
                'title': 'Home',
                'link': '/',
                'icon': 'fa-home'
            },
            {
                'title': 'Comments',
                'link': '/comments',
                'icon': 'fa-comment'
            }
        ];
        
        $scope.logout = function () {
            LoginSrv.logout({}, function (data) {
                toastr.success(data.message, data.status);
                delete sessionStorage.authenticated;
                $rootScope.logged = false;
                $location.path('/login');
            }, function (error) {
                toastr.error(error.data.message, error.data.status);
            });
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
}());