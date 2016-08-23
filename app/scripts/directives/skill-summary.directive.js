(function () {
  angular.module('Podic.directives').directive('skillSummary', skillSummary);
  /* @ng-inject */
  function skillSummary() {
    return {
      restrict: 'E',
      template: '{{skill.name}}(DPS:{{skill.attack/skill.cooldown | number:1}})',
      scope: {skill: '='}
    };
  }
})();
