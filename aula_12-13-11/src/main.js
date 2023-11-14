const express = require('express');
const app = express();

/**
 * Importação do arquivos de
 * configuração de rotas
 */
const baseRouter = require('./routes/base');
const contatoRouter = require('./routes/contato');
// const categoriaRouter = require('./routes/categoria');

app.use(express.json());

/**
 * Configuração de uso das rotas 
 */
app.use(baseRouter);
app.use(contatoRouter);
// app.use(categoriaRouter);

app.listen(3000, function () {
  console.log('API iniciada na porta: 3000');
});
