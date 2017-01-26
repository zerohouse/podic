angular.module('Podic.directives').directive('chatRoom', function () {
  return {
    restrict: 'E',
    scope: {
      chatRoom: '='
    },
    templateUrl: 'templates/directives/chatroom.html',
    controller: function ($scope) {
      $scope.open = function (url) {
        window.open(url, '_system', 'location=yes');
      };
    }
  };
});
