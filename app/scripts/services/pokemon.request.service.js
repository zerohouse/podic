(function () {

  angular.module('Podic.services').service('PokemonRequest', PokemonRequest);

  /* @ng-inject */
  function PokemonRequest($http, $q, userService, ionicToast, $rootScope, $timeout, pokemonProto) {
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
      self.alert('포켓몬 데이터를 요청합니다.');
      if (window.AdMob) {
        $timeout(function () {
          window.AdMob.showInterstitial();
        }, 1500);
      }
      userService.updatePosition();
      return $q(function (ok, no) {
        updateEndPoint().then(function () {
          self.alert('포켓몬 데이터를 가져오는 중입니다.');
          sendRequest('GET_INVENTORY').then(function (data) {
            var inventoryPayload = data.payload[0];
            try {
              var decoded = pokemonProto.ResponseEnvelop.GetInventoryResponse.decode(inventoryPayload);
              ok(decoded.inventory_delta.inventory_items);
              self.alert('포켓몬 데이터를 가져왔습니다.');
              self.state = '';
            }
            catch (e) {
              self.alert('포켓몬 최신버전과 포딕의 프로토콜이 일치하지 않습니다. 이 오류가 발생하면 관리자에게 알려주시면 감사하겠습니다.');
            }

          }, function () {
            self.alert('포켓몬 데이터를 가져오지 못했습니다.');
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
        else
          ok();
      });
    }

    var RequestType = {
      GET_INVENTORY: 4,
      GET_PLAYER: 2,
      GET_PLAYER_PROFILE: 121
    };

    function sendRequest(request) {
      return $q(function (ok, no) {
        $q.all([userService.getToken().then(function (token) {
          return token;
        }), userService.getLatLng().then(function (latlng) {
          return latlng;
        })]).then(function (result) {
          var requests = [new Envelope.Requests(RequestType[request])];
          var envelop = new Envelope({
            unknown1: 2,
            rpc_id: 1469378659230941192,
            requests: requests,
            latitude: result[1].lat,
            longitude: result[1].lng,
            altitude: 0,
            auth: new Envelope.AuthInfo({
              provider: 'google',
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

