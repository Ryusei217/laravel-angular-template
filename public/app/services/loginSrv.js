(function () {
    'use strict';

    angular.module('laravelApp').factory('LoginSrv', function ($resource) {
        return $resource('/api/user/', {}, {
            register: { method: 'POST' },
            logout: { method: 'GET', url: '/api/user/logout' },
            login: { method: 'POST', url: '/api/user/login' },
            forgot: { method: 'POST', url: '/api/user/forgot' },
            reset: { method: 'POST', url: '/api/user/reset' },
            confirm: { method: 'GET', url: '/api/user/confirm/:token'}
        });
    });
}());