(function () {
  angular.module('Podic.directives').directive('skill', skill);
  /* @ng-inject */
  function skill() {
    return {
      restrict: 'E',
      template: '<div class="row">\
                    <div class="col" style="min-width: 100px">{{skill.name}}<br>{{skill.eng}}</div>\
                    <div class="col" ng-click="showPopup(skill.type)">{{skill.type.name}}<i class="ion-ios-help-outline" style="font-size:13px"></i></div>\
                    <div class="col">{{skill.attack}}</div>\
                    <div class="col">{{skill.cooldown}}</div>\
                    <div class="col">{{skill.dps}}</div>\
                    <div class="col">{{skill.energy}}</div>\
                 </div>\
                 ',
      scope: {skill: '='},
      controller: function ($scope, PocketMons, $ionicPopup) {
        $scope.showPopup = function (type) {
          var template = '';
          var attack_strong = type.attack.strong.map(function (id) {
            return PocketMons.attrs[id].name;
          }).join(", ");
          var attack_weak = type.attack.weak.map(function (id) {
            return PocketMons.attrs[id].name;
          }).join(", ");
          if (attack_strong)
            template += "<strong>" + attack_strong + "</strong> 포켓몬을 공격시 1.25배의 데미지를 줍니다.<br><br>";
          if (attack_weak)
            template += "<strong>" + attack_weak + "</strong> 포켓몬을 공격시 0.8배의 데미지만 줍니다.<br><br>";
          $ionicPopup.show({
            template: template,
            title: type.name + ' 특성 공격',
            buttons: [{
              text: '<b>확인</b>',
              type: 'button-royal'
            }]
          });
        };
      }
    };
  }
})();
