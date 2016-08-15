(function () {
  angular.module('Podic.directives').directive('reply', reply);
  /* @ng-inject */
  function reply() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/replies/reply/reply.html',
      scope: {
        reply: '=',
        replies: '=',
        title: '='
      },
      controller: function ($scope, confirm, ionicToast, $ajax, userService, $timeout, text) {

        $scope.text = text;

        $scope.isRootUser = function () {
          return $scope.reply.user.id === userService.user.id;
        };

        $scope.modifying = function () {
          $scope.reply.origin = $scope.reply.text;
          $scope.reply.modify = true;
        };

        $scope.delete = function () {
          confirm(text('deleteMessageByName')($scope.title), text("deleteConfirm")).then(function () {
            $ajax.delete('/api/v1/reply', {id: $scope.reply.id}).then(function () {
              ionicToast.alert(text('deleteDoneMessageByName')($scope.title));
              $scope.replies.remove($scope.reply);
            });
          });
        };

        $scope.done = function () {
          var params = {};
          params.text = $scope.reply.text;
          params.id = $scope.reply.id;
          params.type = $scope.reply.type;
          params.parentId = $scope.reply.parentId;
          $ajax.post('/api/v1/reply', params, true).then(function (reply) {
            if ($scope.reply.mode
            ) {
              $scope.replies.forEach(function (reply) {
                reply.new = false;
              });
              $scope.reply.new = true;
              ionicToast.alert(text('messageWroteByName')($scope.title));
              $scope.reply.modify = false;
              $timeout(function () {
                angular.copy(reply, $scope.reply);
              });
              return;
            }
            ionicToast.alert(text('messageModByName')($scope.title));
            angular.copy(reply, $scope.reply);
            $scope.reply.modify = false;
          })
          ;
        };

        $scope.cancel = function () {
          if ($scope.reply.mode) {
            $scope.replies.remove($scope.reply);
            return;
          }
          $scope.reply.modify = false;
          $scope.reply.text = $scope.reply.origin;
        };

        $scope.nestedReply = function () {
          $scope.replies.forEach(function (reply) {
            reply.new = false;
          });
          $scope.reply.new = true;
          $scope.replies.pushInto($scope.replies.indexOf($scope.reply) + 1, {
            modify: true,
            mode: text('writeReReply'),
            parentId: $scope.reply.id,
            type: $scope.reply.type,
            user: userService.user
          });
        };
      }
    };
  }
})();
