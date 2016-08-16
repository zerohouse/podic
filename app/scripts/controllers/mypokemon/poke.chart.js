angular.module('Podic.controllers').controller('pokemonChartCtrl', pokemonChartCtrl);
function pokemonChartCtrl($scope, $timeout, $rootScope, text) {

  $scope.refresh = function () {
    var typesMap = {};
    $rootScope.pokemons.forEach(function (p) {
      p.pokemon.types.forEach(function (t) {
        var key = t.name;
        if (text.isShowEng())
          key += "(" + t.en + ")";
        if (!typesMap[key])
          typesMap[key] = [];
        typesMap[key].push(p);
      });
    });

    var barChartCtx = document.getElementById("chart").getContext("2d");
    var bubbleChartPokemons = [];
    var pokemonIndexes = [];
    var barChartDataSet = [];
    var barChartLabels = [];
    angular.forEach(typesMap, function (value, key) {
      barChartLabels.push(key);
      barChartDataSet.push(value.length);
      value.forEach(function (pokemon) {
        bubbleChartPokemons.push({x: pokemon.pokemon.power, y: pokemon.individual_score, r: 3});
        pokemonIndexes.push(pokemon);
      });
    });

    Chart.defaults.global.legend.display = false;

    var data = {
      labels: barChartLabels,
      datasets: [{
        borderWidth: 1,
        data: barChartDataSet
      }]
    };

    new Chart(barChartCtx, {
      type: 'horizontalBar',
      data: data
    });

    var bubbleChartCanvas = document.getElementById("chart2").getContext("2d");
    var bubbleChartData = {
      datasets: [
        {
          label: 'pokemons',
          data: bubbleChartPokemons,
          backgroundColor: "#FF6384",
          hoverBackgroundColor: "#FF6384"
        }]
    };

    new Chart(bubbleChartCanvas, {
      type: 'bubble',
      data: bubbleChartData,
      options: {
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              var pokemon = pokemonIndexes[tooltipItem.index];
              var name = pokemon.nickname || pokemon.pokemon.name;
              if (text.isShowEng())
                name += "(" + pokemon.pokemon.en + ")";
              name += " - ";
              return name +
                text('pokemonPower') +
                ":" + pokemon.pokemon.power + ", " +
                text('individualValue') +
                ":" + pokemon.individual_score;
            }
          }
        }
      }
    });
  };

  $timeout($scope.refresh);
}
