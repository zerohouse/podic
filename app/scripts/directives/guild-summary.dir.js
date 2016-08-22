(function () {
  angular.module('Podic.directives').directive('guildSummary', guildSummary);
  /* @ng-inject */
  function guildSummary() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/guildSummary.html',
      scope: {
        guild: '='
      }
    };
  }
})();
