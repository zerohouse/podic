(function () {

  angular.module('Podic.services').service('PokemonRequest', PokemonRequest);

  /* @ng-inject */
  function PokemonRequest($http, $q, userService, ionicToast, $rootScope, $timeout, pokemonProto, text, db, $ajax) {
    var Envelope = pokemonProto.RequestEnvelop;

    var self = this;
    var api_url = "https://pgorelease.nianticlabs.com/plfe/rpc";
    self.api_url = null;


    $rootScope.$on('userLogout', function () {
      self.api_url = null;
    });

    self.alert = function (message) {
      self.state = message;
      ionicToast.hide();
      ionicToast.show(message, 'bottom', false, 3000);
    };

    this.getInventoryData = function () {
      self.alert(text("requestPokemon"));
      if (window.AdMob) {
        $timeout(function () {
          window.AdMob.showInterstitial();
        }, 1500);
      }
      userService.updatePosition();
      return $q(function (ok, no) {
        updateEndPoint().then(function () {
          self.alert(text("requestPokemon2"));
          sendRequest('GET_INVENTORY').then(function (data) {
            var inventoryPayload = data.payload[0];
            try {
              var decoded = pokemonProto.ResponseEnvelop.GetInventoryResponse.decode(inventoryPayload);
              ok(decoded.inventory_delta.inventory_items);
              updatePokeInfo();
              self.alert(text("requestPokemonDone"));
              self.state = text('noPokemon');
            }
            catch (e) {
              self.alert(text("parseError"));
            }

          }, function () {
            self.alert(text("serverError"));
            no();
          });
        });
      });
    };

    function updateEndPoint() {
      return $q(function (ok) {
        if (!self.api_url) {
          sendRequest('GET_PLAYER').then(function (response) {
            if (response.api_url) {
              self.api_url = "https://" + response.api_url + "/rpc";
              ok();
            }
          });
        }
        else {
          ok();
        }
      });
    }

    var RequestType = {
      GET_INVENTORY: 4,
      GET_PLAYER: 2
    };

    function updatePokeInfo() {
      sendRequest('GET_PLAYER').then(function (response) {
        var payload = response.payload[0];
        try {
          var decodedProfile = pokemonProto.ResponseEnvelop.ProfilePayload.decode(payload).profile;
          var params = {};
          params.createdTime = decodedProfile.creation_time.toNumber();
          params.pokeCoin = decodedProfile.currency.findBy("type", "POKECOIN").amount;
          params.starDust = decodedProfile.currency.findBy("type", "STARDUST").amount;
          params.username = decodedProfile.username;
          params.team = decodedProfile.team;
          $ajax.put('/api/v1/user/pokeInfo', params, true);
        } catch (e) {
          console.log(e);
        }
      });
    }

    function sendRequest(request) {
      return $q(function (ok, no) {
        $q.all([userService.getToken().then(function (token) {
          return token;
        }), userService.getLatLng().then(function (latlng) {
          return latlng;
        })]).then(function (result) {
          var req = [new Envelope.Requests(RequestType[request])];
          var envelop = new Envelope({
            unknown1: 2,
            rpc_id: 1469378659230941192,
            requests: req,
            latitude: result[1].lat,
            longitude: result[1].lng,
            altitude: 0,
            auth: new Envelope.AuthInfo({
              provider: db.etc.provider || 'google',
              token: new Envelope.AuthInfo.JWT(result[0], 59)
            }),
            unknown12: 989
          });
          var buffer = envelop.encode().toBuffer();
          $http({
            url: self.api_url || api_url,
            responseType: 'arraybuffer',
            transformRequest: [],
            method: "POST",
            data: buffer
          }).then(function (data) {
            try {
              ok(pokemonProto.ResponseEnvelop.decode(data.data));
            } catch (error) {
              if (error.decoded) {
                ok(error.decoded);
                return;
              }
              no();
            }
          }, no);
        });
      });
    }

  }
})();

