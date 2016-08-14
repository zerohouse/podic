(function () {
  angular.module('Podic.directives').directive('types', types);
  /* @ng-inject */
  function types() {
    return {
      restrict: 'E',
      template: '<span ng-repeat="type in types" style="color:#626262" ng-click="showPopup(type)">{{type.name}}<i class="ion-ios-help-outline" style="font-size:13px"></i> ',
      scope: {
        types: '='
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
              text('strongDefense')+
              "<br><br>";
          if (defense_weak)
            template += "<strong>" + defense_weak + "</strong> " +
              text('weakDefense')+
              "<br><br>";
          $ionicPopup.show({
            template: template,
            title: type.name + ' ' +
            text('typeEffective'),
            buttons: [
              {
                text: '<b>' +
                text('ok')+
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
