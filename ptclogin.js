var express = require('express');
var app = express();
var PokemonGO = require('pokemon-go-node-api');
var login = require('./node_modules/pokemon-go-node-api/logins');

app.post('/:username/:password', function (req, res) {
  login.PokemonClub(req.params.username, req.params.password, new PokemonGO.Pokeio(), function (n, token) {
    res.send(token);
  });
});

app.listen(3000, function () {
  console.log('ptc login listening on port 3000!');
});

