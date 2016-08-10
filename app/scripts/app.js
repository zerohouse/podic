'use strict';

/**
 * @ngdoc overview
 * @name Podic
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

angular.module('Podic', [
  'ionic',
  'ngCordova',
  'angular.essential',
  'Podic.services',
  'Podic.controllers',
  'Podic.directives',
  'Podic.filters',
  'ionic-toast',
  'uiGmapgoogle-maps',
  'ngFileUpload'
])
  .run(function ($ionicPlatform, ionicToast) {
    ionicToast.alert = function (message) {
      ionicToast.show(message, 'bottom', false, 3000);
    };

    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      if (window.AdMob) {
        // window.AdMob.createBanner({
        //   adId: 'ca-app-pub-6439823362094213/4525271489',
        //   position: window.AdMob.AD_POSITION.BOTTOM_CENTER,
        //   autoShow: true
        // });
        window.AdMob.prepareInterstitial({
          adId: 'ca-app-pub-6439823362094213/9069562284',
          autoShow: false
        });
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/base/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.herepokemon', {
        url: '/herepokemon',
        abstract: true,
        views: {
          'menuContent': {
            templateUrl: 'templates/herepokemon/tabs.html',
            controller: 'herepokemonCtrl'
          }
        }
      })
      .state('app.herepokemon.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'templates/herepokemon/list/list.html',
          }
        },
        onEnter: function ($timeout) {
          $timeout(function () {
            angular.element(document.querySelector('ion-content')).removeClass('has-footer');
          }, 300);
        }
      })
      .state('app.herepokemon.detail', {
        url: '/trace/:id',
        views: {
          'tab-list': {
            templateUrl: 'templates/herepokemon/detail/detail.html',
            controller: 'traceDetailCtrl'
          }
        }
      })
      .state('app.herepokemon.map', {
        url: '/map',
        views: {
          'tab-map': {
            templateUrl: 'templates/herepokemon/map/map.html',
            controller: 'MapCtrl'
          }
        },
        onEnter: function ($timeout) {
          $timeout(function () {
            angular.element(document.querySelector('#map')).scope().map.control.refresh();
          });
        }
      })
      // .state('app.herepokemon.trainers', {
      //   url: '/trainers',
      //   views: {
      //     'tab-trainers': {
      //       templateUrl: 'templates/herepokemon/trainers/trainers.html',
      //     }
      //   }
      // })
      .state('app.trainerRank', {
        url: '/trainer/rank',
        views: {
          'menuContent': {
            templateUrl: 'templates/rankTrainer/rank-trainer.html',
            controller: 'trainerRankCtrl'
          }
        },
        onEnter: function (rankerService) {
          rankerService.reset();
        }
      })
      .state('app.pokemonRank', {
        url: '/pokemon/rank',
        views: {
          'menuContent': {
            templateUrl: 'templates/rankPokemon/rank-pokemon.html',
            controller: 'pokemonRankCtrl'
          }
        },
        onEnter: function (pokemonRankService) {
          pokemonRankService.reset();
        }
      })
      .state('app.pokemons', {
        url: '/pokemons',
        views: {
          'menuContent': {
            templateUrl: 'templates/pokemon/pokemons.html',
            controller: 'pokemonsCtrl'
          }
        }
      })
      .state('app.pokemon', {
        url: '/pokemon/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/pokemon/pokemon.html',
            controller: 'pokemonCtrl'
          }
        }
      })
      .state('app.pokemonDesc', {
        url: '/pokemonDesc',
        views: {
          'menuContent': {
            templateUrl: 'templates/pokemoninDictionary/pokemons.html',
            controller: 'pokemonDescriptionListCtrl'
          }
        }
      })
      .state('app.pokemonDetail', {
        url: '/pokemonDetail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/pokemoninDictionary/pokemon.html',
            controller: 'pokemonDescriptionCtrl'
          }
        }
      })
      .state('app.mypage', {
        url: '/mypage',
        views: {
          'menuContent': {
            templateUrl: 'templates/mypage/mypage.html',
            controller: 'myPageCtrl'
          }
        },
        onEnter: function (userService) {
          userService.newUser.nickname = userService.user.nickname || userService.user.userInfo.name;
          userService.newUser.img = userService.user.img || userService.user.userInfo.picture;
        }
      });

    $urlRouterProvider.otherwise('/app/pokemons');
  })
  .run(function ajaxConfig($ajax) { //, $rootScope, userService, $ionicPlatform, $cordovaDevice

    // $ionicPlatform.ready(function () {
    //   var push = new Ionic.Push({
    //     "debug": false
    //   });
    //
    //   push.register(function (token) {
    //     console.log("Device token:", token.token);
    //     push.saveToken(token);  // persist the token in the Ionic Platform
    //   });
    // });
    $ajax.url = 'http://52.78.95.98:8080';
    // $ajax.url = 'http://192.168.0.2:8080';
    // $ajax.url = 'http://localhost:8080';

    $ajax.handler(function (response, success, error) {
        if (response.state === "SUCCESS") {
          success(response.data);
          return;
        }
        error(response);
      }
    );
  });
// angular.module('Podic').config(function (uiGmapGoogleMapApiProvider) {
//   uiGmapGoogleMapApiProvider.configure({
//     key: 'AIzaSyD7ZttCvpNxvRV0Pb4EVInaUSSeb419ZhI',
//     v: '3.exp', //defaults to latest 3.X anyhow
//     libraries: 'weather,geometry,visualization'
//   });
// });



angular.module('Podic.services', []);
angular.module('Podic.directives', []);
angular.module('Podic.controllers', []);
angular.module('Podic.filters', []);
