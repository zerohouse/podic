angular.module('Podic')
  .run(function ($rootScope, $state, $cordovaGoogleAnalytics, $ionicPlatform) {
    $ionicPlatform.ready(function () {
      try {
        $cordovaGoogleAnalytics.startTrackerWithId('UA-82318141-1');
      }
      catch (e) {
      }

      $rootScope.$on('$stateChangeSuccess', function (e, state) {
        $cordovaGoogleAnalytics.trackView(state.name);
      });

    });
  });
