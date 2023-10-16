// Importando a biblioteca e definindo uma aplicação tipo express
const express = require('express');
const app = express();

// Definindo Endpoint (Rotas), pontos de entrada da API
app.get('/', function (request, response) {
  response.send('API Funcionando...');
});

app.get('/sobre', function (request, response) {
  response.send('Informações sobre a API.');
});

// Iniciando a aplicação na porta definida (porta 3000)
app.listen(3000, function () {
  console.log('API iniciada na porta: 3000');
});
