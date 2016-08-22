(function () {
  angular.module('Podic.directives').directive('skill', skill);
  /* @ng-inject */
  function skill() {
    return {
      restrict: 'E',
      template: '<div class="row">\
                    <div class="col" style="min-width: 100px"><span>{{skill.name}}</span><span ng-if="isShowEng()"><br>{{skill.en}}</span></div>\
                    <div class="col" ng-click="showPopup(skill.type)">{{skill.type.name}}<i class="ion-ios-help-outline" style="font-size:13px"></i></div>\
                    <div class="col">{{skill.cooldown}}</div>\
                    <div class="col">{{skill.attack}}({{skill.attack/skill.cooldown | number:1}})</div>\
                    <div class="col">{{skill.energy}}({{skill.energy/skill.cooldown | number:1}})</div>\
                 </div>\
                 ',
      scope: {skill: '='},
      controller: function ($scope, Pokemons, $ionicPopup, text) {
        $scope.isShowEng = text.isShowEng;
        $scope.showPopup = function (type) {
          var template = '';
          var attack_strong = type.attack.strong.map(function (id) {
            return Pokemons.attrs[id].name;
          }).join(", ");
          var attack_weak = type.attack.weak.map(function (id) {
            return Pokemons.attrs[id].name;
          }).join(", ");
          if (attack_strong)
            template += "<strong>" + attack_strong + "</strong> " +
              text("strongAttack") +
              "<br><br>";
          if (attack_weak)
            template += "<strong>" + attack_weak + "</strong> " +
              text("weakAttack") +
              "<br><br>";
          $ionicPopup.show({
            template: template,
            title: type.name + ' ' +
            text("typeAttack"),
            buttons: [{
              text: '<b>' +
              text("ok") +
              '</b>',
              type: 'button-positive'
            }]
          });
        };
      }
    };
  }
})();
