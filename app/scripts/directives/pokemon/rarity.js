(function () {
  angular.module('Podic.directives').directive('rarity', rarity);
  /* @ng-inject */
  function rarity(text) {
    return {
      restrict: 'A',
      template: "{{text('rareWords')[i]}}",
      scope: {
        rarity: '='
      },
      link: function (s, e) {
        s.text = text;
        var color;
        if (s.rarity > 0.3) {
          color = '#7E8AA2';
          s.i = 4;
        }
        else if (s.rarity > 0.2) {
          color = '#2980B9';
          s.i = 3;
        }
        else if (s.rarity > 0.1) {
          color = '#01A2A6';
          s.i = 2;
        }
        else if (s.rarity > 0.05) {
          color = '#00A388';
          s.i = 1;
        }
        else {
          color = '#E74C3C';
          s.i = 0;
        }

        e.css('color', color);
        if (s.rarity > 6) {
          e.css('font-weight', 900);
        }
      }
    };
  }
})();
