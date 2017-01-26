(function () {
  angular.module('Podic.directives').directive('pokerank', pokerank);
  /* @ng-inject */
  function pokerank(text) {

    return {
      restrict: 'A',
      template: "{{text}}",
      scope: {
        pokerank: '='
      },
      link: function (s, e) {
        var color;
        if (s.pokerank > 42) {
          s.text = "SS";
          color = '#E74C3C';
          e.css('font-weight', 900);
        }
        else if (s.pokerank > 39) {
          s.text = "S";
          color = '#00A388';
          e.css('font-weight', 900);
        }
        else if (s.pokerank > 30) {
          s.text = "A";
          color = '#01A2A6';
        }
        else if (s.pokerank > 20) {
          s.text = "B";
          color = '#7E8AA2';
        }
        else if (s.pokerank > 10) {
          s.text = "C";
          color = '#7E8AA2';
        }
        else {
          s.text = "D";
          color = '#7E8AA2';
        }
        e.css('color', color);
      }
    };
  }
})();
