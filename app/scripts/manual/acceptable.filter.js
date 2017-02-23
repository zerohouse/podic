angular.module('Podic.filters').filter('acceptable', function () {
  return function (value, results) {
    return value.filter(c => results.find(r => c.condition(r)));
  };
});
