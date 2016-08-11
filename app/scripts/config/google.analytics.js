angular.module('Podic')
  .run(function ($rootScope, $state, $cordovaGoogleAnalytics, userService) {

    $rootScope.$on('$stateChangeSuccess', function (e, state) {
      $cordovaGoogleAnalytics.trackView(state.name);
    });

    try {
      $cordovaGoogleAnalytics.startTrackerWithId('UA-82318141-1');
    }
    catch (e) {
    }

    $rootScope.$on('userLoggedIn', function () {
      $cordovaGoogleAnalytics.setUserId(userService.user.id);
    });

  });
