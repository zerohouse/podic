angular.module('Podic.filters').filter('acceptable', function () {
  return function (value, results) {
    return value.filter(function (c) {
      return results.find(function (r) {
        return c.condition(r);
      });
    });
  };
});
