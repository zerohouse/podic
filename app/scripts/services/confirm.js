(function () {
  angular.module('Podic.services').factory('confirm', confirm);
  /* @ng-inject */
  function confirm($q, $ionicPopup) {
    return function (message, title) {
      return $q(function (ok, no) {
        var confirmPopup = $ionicPopup.confirm({
          title: title,
          template: message
        });
        confirmPopup.then(function (res) {
          if (res) {
            ok();
          } else {
            no();
          }
        });
      });
    };
  }
})();
