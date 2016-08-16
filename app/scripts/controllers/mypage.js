(function () {
  angular.module('Podic.controllers').controller('myPageCtrl', myPageCtrl);
  /* @ng-inject */
  function myPageCtrl($scope, userService, $ajax, text) {
    $scope.user = userService.newUser;
    $scope.update = function (file) {
      var param = {};
      param.nickname = $scope.user.nickname;
      if (file) {
        param.file = file;
        $ajax.upload('/api/v1/file', param).then(function (img) {
          param.img = img;
          userService.update(param);
        });
        return;
      }
      userService.update(param);
    };


    $scope.languages = text.getLanguages();
  }
})();
