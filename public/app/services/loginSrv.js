(function () {
    'use strict';

    angular.module('laravelApp').factory('LoginSrv', function ($resource) {
        return $resource('/api/login/', {}, {
            logout: { method: 'GET' },
            login: { method: 'POST' }
        });
    });
}());