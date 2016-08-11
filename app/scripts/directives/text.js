(function () {
  angular.module('Podic.directives').directive('text', text);
  /* @ng-inject */

  function text(constants) {
    return {
      restrict: 'E',
      link: function (s, e, a) {
        e.text(constants(a.value));
      }
    };
  }
})();
