(function () {
  angular.module('Podic.directives').directive('pokerank', pokerank);
  /* @ng-inject */
  function pokerank() {

    return {
      restrict: 'E',
      template: '{{text}}<span ng-if="!onlyRank" class="small-tail">({{iv*100/45 | number : 0}}%)</span>',
      scope: {
        iv: '=',
        onlyRank: '='
      },
      link: function (s, e) {
        var color;
        if (s.iv > 42) {
          s.text = "SS";
          color = '#E74C3C';
          e.css('font-weight', 900);
        }
        else if (s.iv > 39) {
          s.text = "S";
          color = '#00A388';
          e.css('font-weight', 900);
        }
        else if (s.iv > 30) {
          s.text = "A";
          color = '#01A2A6';
        }
        else if (s.iv > 20) {
          s.text = "B";
          color = '#7E8AA2';
        }
        else if (s.iv > 10) {
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
