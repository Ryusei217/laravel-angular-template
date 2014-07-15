(function () {
    'use strict';

    angular.module('laravelApp').controller('CommentCtrl', function ($scope, $location, CommentSrv) {
        // object to hold all the data for the new comment form
        $scope.commentData = CommentSrv.list({}, function (data) {
            $scope.comments = data;
            $scope.loading = false;
        }, function (error) {
            toastr.error(error.data.message, error.data.status);
        });

        // loading variable to show the spinning loading icon
        $scope.loading = true;

        $scope.submitComment = function () {
            $scope.loading = true;

            // save the comment. pass in comment data from the form
            // use the function we created in our service
            CommentSrv.create(
                $scope.comment,
                function (data) {
                    toastr.success(data.message, data.status);
                    // if successful, we'll need to refresh the comment list
                    CommentSrv.list({}, function (getData) {
                        $scope.comments = getData;
                        $scope.loading = false;
                    });
                },
                function (error) {
                    toastr.error(error.data.message, error.data.status);
                }
            );
        };

        $scope.deleteComment = function (id) {
            $scope.loading = true;
            
            // use the function we created in our service
            CommentSrv.destroy(
                { id: id },
                function (data) {
                    toastr.warning(data.message, data.status);
                    // if successful, we'll need to refresh the comment list
                    CommentSrv.list({}, function (getData) {
                        $scope.comments = getData;
                        $scope.loading = false;
                    });
                },
                function (error) {
                    toastr.error(error.data.message, error.data.status);
                }
            );
        };
    });
}());