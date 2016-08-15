(function () {
  angular.module('Podic.directives').directive('skillCalculated', skillCalculated);
  /* @ng-inject */
  function skillCalculated() {
    return {
      restrict: 'E',
      scope: {
        skill: '=',
        calculated: '='
      },
      templateUrl: "templates/directives/skillCalcuated.html",
      controller: function ($scope, ionicToast) {
        $scope.stabBonus = function () {
          ionicToast.alert("포켓몬과 속성이 같아 1.25배의 데미지를 줍니다.");
        };

        $scope.bonus = function(bonus){
          ionicToast.alert("상대 포켓몬과 상성에 의해 " +
            bonus +
            "배의 데미지를 줍니다.");
        };
      }
    };
  }
})();
