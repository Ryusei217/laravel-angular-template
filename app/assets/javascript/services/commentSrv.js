(function () {
    'use strict';

    angular.module('laravelApp').factory('CommentSrv', function ($resource) {
        return $resource('/api/comments/:id', {}, {
            list: { method: 'GET', isArray: true },
            create: { method: 'POST' },
            destroy: { method: 'DELETE', params: { id: '@id' } }
        });
    });
}());