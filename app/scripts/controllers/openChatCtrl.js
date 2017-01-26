(function () {
  angular.module('Podic.controllers').controller('openChatCtrl', openChatCtrl);
  /* @ng-inject */
  function openChatCtrl($scope, $ajax) {
    $scope.chatRooms = [
      {
        "name": "전체",
        "url": "https://open.kakao.com/o/gZD4iZr"
      },
      {
        "type":"group",
        "name": "서울",
        "url":"https://open.kakao.com/o/gHWTjZr"
      },
      {
        "type":"group",
        "name": "경기",
        "url": "https://open.kakao.com/o/gvTi10r"
      },
      {
        "name": "전라/제주",
        "url": "https://open.kakao.com/o/gmKp10r"
      },
      {
        "name": "충청/강원",
        "url": "https://open.kakao.com/o/gjct10r"
      },
      {
        "name": "부산/경남",
        "url": "https://open.kakao.com/o/g9Wk10r"
      },
      {
        "name": "해외",
        "url": "https://open.kakao.com/o/gtuopZr"
      },
      {
        "name": "초보초보",
        "description": "레벨 20이하 입문!",
        "url": "https://open.kakao.com/o/gEYTA0r"
      },
      {
        "name": "정보 공유",
        "url": "https://open.kakao.com/o/gMuspZr"
      },
      {
        "name": "버그제보",
        "url": "https://open.kakao.com/o/sCVYmZr"
      }
    ];

    $ajax.get('http://podic.net/scripts/chat.json').then(function (chat) {
      $scope.chatRooms = chat;
    }, function (chat) {
      $scope.chatRooms = chat;
    });

  }
})();
