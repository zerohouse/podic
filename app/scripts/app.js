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
  'ngFileUpload',
  'rzModule'
])
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/base/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.logs', {
        url: '/logs',
        views: {
          'menuContent': {
            templateUrl: 'templates/log/log.html'
          }
        }
      })
      // .state('app.tips', {
      //   url: '/trace',
      //   views: {
      //     'menuContent': {
      //       templateUrl: 'templates/herepokemon/list/list.html',
      //       controller: 'tipCtrl'
      //     }
      //   },
      //   onEnter: function ($timeout, traceService) {
      //     traceService.refresh();
      //     $timeout(function () {
      //       angular.element(document.querySelector('#list-content')).removeClass('has-footer');
      //     }, 300);
      //   }
      // })
      // .state('app.tipDetail', {
      //   url: '/trace/:id',
      //   views: {
      //     'menuContent': {
      //       templateUrl: 'templates/herepokemon/detail/detail.html',
      //       controller: 'traceDetailCtrl'
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
        onEnter: function (rankerService, userService) {
          if (userService.user && userService.user.addressRanks && userService.user.addressRanks.last())
            rankerService.district = userService.user.addressRanks.last().longName;
          rankerService.reset();
        }
      })
      .state('app.trainerDetail', {
        url: '/trainerDetail',
        views: {
          'menuContent': {
            templateUrl: 'templates/rankTrainer/trainer.html',
            controller: 'trainerDetailCtrl'
          }
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
        },
        onEnter: function ($timeout) {
          $timeout(function () {
            angular.element(document.querySelector('#pokemonlist')).removeClass('has-footer');
          }, 300);
        }
      })
      .state('app.myPokemonChart', {
        url: '/pokemons/chart',
        views: {
          'menuContent': {
            templateUrl: 'templates/pokemon/mypokechart.html',
            controller: 'pokemonChartCtrl'
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
          userService.newUser.id = userService.user.id;
        }
      })
      .state('app.simulator', {
        url: '/simulator',
        abstract: true,
        views: {
          'menuContent': {
            templateUrl: 'templates/simulator/tabs.html'
          }
        }
      })
      .state('app.simulator.cp', {
        url: '/cp?:pokemon:attack:defense:stamina:level',
        views: {
          'tab-cp': {
            templateUrl: 'templates/simulator/cp.simulator.html',
            controller: 'cpSimulator'
          }
        }
      })
      .state('app.simulator.egg', {
        url: '/egg',
        views: {
          'tab-egg': {
            templateUrl: 'templates/simulator/egg.simulator.html',
            controller: 'eggCtrl'
          }
        }
      })
      .state('app.simulator.attack', {
        url: '/attack?:pokemon?pokemon_id',
        views: {
          'tab-attack': {
            templateUrl: 'templates/simulator/attack.simulator.html',
            controller: 'attackSimulateCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/app/pokemons');
  })

  .run(function ($ionicPlatform) {

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


angular.module('Podic.services', []);
angular.module('Podic.directives', []);
angular.module('Podic.controllers', []);
angular.module('Podic.filters', []);
