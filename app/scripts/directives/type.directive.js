(function () {
  angular.module('Podic.directives').directive('type', type);
  /* @ng-inject */
  function type() {
    return {
      restrict: 'E',
      template: '<span style="color:#626262" ng-click="showPopup(type)">{{type.name}}<i ng-if="!noHelp" class="ion-ios-help-outline" style="font-size:13px"></i> ',
      scope: {
        type: '=',
        noHelp: '='
      },
      controller: function ($scope, $ionicPopup, PocketMons, text) {
        $scope.showPopup = function (type) {

          var template = '';
          var defense_strong = type.defense.strong.map(function (id) {
            return PocketMons.attrs[id].name;
          }).join(", ");
          var defense_weak = type.defense.weak.map(function (id) {
            return PocketMons.attrs[id].name;
          }).join(", ");
          if (defense_strong)
            template += "<strong>" + defense_strong + "</strong> " +
              text('strongDefense') +
              "<br><br>";
          if (defense_weak)
            template += "<strong>" + defense_weak + "</strong> " +
              text('weakDefense') +
              "<br><br>";
          $ionicPopup.show({
            template: template,
            title: type.name + ' ' +
            text('typeEffective'),
            buttons: [
              {
                text: '<b>' +
                text('ok') +
                '</b>',
                type: 'button-royal'
              }
            ]
          });
        };


      }
    };
  }
})();
