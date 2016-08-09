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
      controller: function ($scope, confirm, ionicToast, $ajax, userService, $timeout) {

        $scope.isRootUser = function () {
          return $scope.reply.user.id === userService.user.id;
        };

        $scope.modifying = function () {
          $scope.reply.modify = true;
        };

        $scope.delete = function () {
          confirm($scope.title +
            "을 삭제하시겠습니까?", "삭제확인").then(function () {
            $ajax.delete('/api/v1/reply', {id: $scope.reply.id}).then(function () {
              ionicToast.alert($scope.title +
                "이 삭제되었습니다.");
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
              ionicToast.alert($scope.title +
                "이 작성되었습니다.");
              $scope.reply.modify = false;
              $timeout(function () {
                angular.copy(reply, $scope.reply);
              });
              return;
            }
            ionicToast.alert($scope.title +
              "이 수정되었습니다.");
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
            mode: "답글 달기",
            parentId: $scope.reply.id,
            type: $scope.reply.type,
            user: userService.user
          });
        };
      }
    };
  }
})();
