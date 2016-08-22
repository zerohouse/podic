(function () {
  angular.module('Podic.controllers').controller('guildListCtrl', guildListCtrl);
  /* @ng-inject */
  function guildListCtrl($scope, guildService, $ionicModal, $state) {
    $scope.guildService = guildService;

    $scope.guild = {name: '', introduce: ''};

    $ionicModal.fromTemplateUrl('templates/guildSearch/newGuild.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.close = function () {
      $scope.modal.hide();
    };

    $scope.newGuild = function () {
      $scope.modal.show();
    };

    $scope.makeGuild = function () {
      guildService.makeGuild($scope.guild).then(function (guild) {
        $scope.close();
        $state.go('app.guild.list', {id: guild.id});
      });
    };


  }
})();
