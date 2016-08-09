angular.module('Podic.services').service('db', db);
/* @ng-inject */
function db($window) {
  this.set = function (key, value) {
    $window.localStorage[key] = JSON.stringify(value);
  };

  this.get = function (key) {
    return JSON.parse($window.localStorage[key]);
  };

  this.delete = function (key) {
    $window.localStorage[key] = undefined;
  };

  this.is = function (key) {
    return $window.localStorage[key] !== undefined;
  };

  this.clear = function () {
    $window.localStorage.clear();
  };

}
