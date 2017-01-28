(function () {
  angular.module('Podic.controllers').controller('myPageCtrl', myPageCtrl);
  /* @ng-inject */
  function myPageCtrl($scope, userService) {
    $scope.user = userService.newUser;
    $scope.update = function () {
      var param = {};
      param.nickname = $scope.user.nickname;
      param.hideInRank = $scope.user.hideInRank;
      // if (file) {
      //   param.file = file;
      //   $ajax.upload('/api/v1/file', param).then(function (img) {
      //     param.img = img;
      //     userService.update(param);
      //   });
      //   return;
      // }
      userService.update(param);
    };

  }
})();
