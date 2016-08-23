(function () {
  angular.module('Podic.directives').directive('rarity', rarity);
  /* @ng-inject */
  function rarity(text) {

    var colors = ['#7E8AA2', '#7E8AA2', '#7E8AA2', '#2980B9', '#2980B9', '#01A2A6', '#00A388', '#E74C3C'];

    return {
      restrict: 'A',
      template: "{{text('rareWords')[rarity]}}",
      scope: {
        rarity: '='
      },
      link: function (s, e) {
        s.text = text;
        e.css('color', colors[s.rarity]);
        if (s.rarity > 6) {
          e.css('font-weight', 900);
        }
      }
    };
  }
})();
