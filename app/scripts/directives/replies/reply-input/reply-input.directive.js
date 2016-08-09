(function () {
    angular.module('Podic.directives').directive('replyInput', replyInput);
    /* @ng-inject */
    function replyInput() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/replies/reply-input/reply-input.html',
            scope: {
                reply: '=',
                mode: '@',
                done: '=',
                cancel: '=',
                title:'='
            },
            controller: function ($scope, userService) {
                $scope.user = userService.user;
            }
        };
    }
})();
