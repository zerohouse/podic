(function () {
  angular.module('Podic.directives').controller('repliesCtrl', repliesCtrl);
  /* @ng-inject */
  function repliesCtrl($scope, $ajax, ionicToast) {

    $scope.getReplies = function () {
      if ($scope.repliesId === undefined)
        return;
      $ajax.get('/api/v1/reply', {type: $scope.type, id: $scope.repliesId}).then(function (replies) {
        replies.sort(function (o1, o2) {
          return o2.id - o1.id;
        });
        var childes = replies.filter(function (reply) {
          return reply.parentId;
        });
        replies.removeAll(childes);
        var result = [];
        replies.forEach(function (reply) {
          result.push(reply);
          result.pushAll(childes.filter(function (child) {
            return child.parentId === reply.id;
          }));
        });
        $scope.replies = result;
      });
    };

    $scope.$watch('repliesId', $scope.getReplies);

    $scope.preview = true;

    $scope.replies = [];
    $scope.reply = {};

    if (!$scope.title)
      $scope.title = "댓글";

    $scope.done = function () {
      if (!$scope.reply.text)
        return;
      var params = {};
      params.type = $scope.type + "_" + $scope.repliesId;
      params.text = $scope.reply.text;
      params.id = $scope.reply.id;
      $ajax.post('/api/v1/reply', params, true).then(function (reply) {
        ionicToast.alert("댓글이 작성되었습니다.");
        $scope.replies.forEach(function (reply) {
          reply.new = false;
        });
        reply.new = true;
        $scope.write = false;
        $scope.replies.unshift(reply);
        $scope.reply = {};
      });
    };

    $scope.limit = 0;

    $scope.more = function () {
      $scope.limit += 8;
    };

    $scope.more();

  }
})();
