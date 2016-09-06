angular.module('Podic.directives').directive('errRemove', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      element.bind('error', function () {
        element.remove();
      });
    }
  };
});
