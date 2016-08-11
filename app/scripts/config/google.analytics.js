angular.module('Podic')
  .run(function ($rootScope, $state, $cordovaGoogleAnalytics, $ionicPlatform, userService) {

    $ionicPlatform.ready(function () {
      try {
        $cordovaGoogleAnalytics.startTrackerWithId('UA-82318141-1');
      }
      catch (e) {
      }


      $rootScope.$on('$stateChangeSuccess', function (e, state) {
        $cordovaGoogleAnalytics.trackView(state.name);
      });

      $rootScope.$on('userLoggedIn', function () {
        $cordovaGoogleAnalytics.setUserId(userService.user.id);
      });
    });


  });
