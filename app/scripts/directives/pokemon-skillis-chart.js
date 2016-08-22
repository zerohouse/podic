(function () {
  angular.module('Podic.directives').directive('pokeSkills', pokeSkills);
  /* @ng-inject */
  function pokeSkills($parse, Pokemons) {
    return {
      restrict: 'A',
      link: function (s, e, a) {
        s.$watch(a.data, function () {
          var ctx = e[0].getContext("2d");
          var skillsMap = $parse(a.data)(s);
          var labels = [];
          var size = [];
          var sum = 0;
          angular.forEach(skillsMap, function (value, key) {
            size.push(value);
            sum += value;
            labels.push(Pokemons.skills.findById(key).name);
          });
          var datum = size.map(function (s) {
            return Math.floor(s * 1000 / sum) / 10;
          });

          var data = {
            labels: labels,
            datasets: [
              {
                data: datum,
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#4661EE",
                  "#EC5657",
                  "#1BCDD1",
                  "#8FAABB",
                  "#B08BEB",
                  "#3EA0DD",
                  "#F5A52A",
                  "#23BFAA",
                  "#FAA586",
                  "#EB8CC6"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          };
          new Chart(ctx, {
            type: 'pie',
            data: data
          });
        });

      }
    };
  }
})();

