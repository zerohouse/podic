angular.module('Podic.directives').directive('oneClick', function ($timeout) {
  return function (scope, element, attrs) {
    var time;
    element.bind('touchstart click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      $timeout.cancel(time);
      time = $timeout(function () {
        scope.$apply(attrs.oneClick);
      }, 200);
    });
  };
});
