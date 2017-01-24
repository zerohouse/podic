(function () {
  angular.module('Podic.controllers').controller('openChatCtrl', openChatCtrl);
  /* @ng-inject */
  function openChatCtrl($scope, $ajax) {
    $scope.chatRooms = [{"name": "전체", "url": "https://open.kakao.com/o/gHWTjZr"}];

    $ajax.get('http://podic.net/scripts/chat.json').then(function (chat) {
      $scope.chatRooms = chat;
    }, function (chat) {
      $scope.chatRooms = chat;
    });

    $scope.open = function (url) {
      window.open(url, '_system', 'location=yes');
    };
  }
})();
