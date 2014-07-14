(function () {
    'use strict';

    angular.module('laravelApp').controller('NavCtrl', function ($scope, $location) {
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
            },
            {
                'title': 'Login',
                'link': '/login',
                'icon': 'fa-sign-in'
            }
            
        ];

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
}());