(function () {
  angular.module('Podic.directives').directive('localnamer', localNamer);
  /* @ng-inject */
  function localNamer() {
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      controller: function ($scope, text) {
        $scope.isShowEng = text.isShowEng;
      },
      template: '{{value.name}}<span ng-if="isShowEng()">({{value.en}})</span>'
    };
  }
})();
