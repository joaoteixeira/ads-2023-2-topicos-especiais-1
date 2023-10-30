const express = require('express');
const contatoController = require('../controllers/contato.controller');

const router = express.Router();

const listaContatos = [
  {
    codigo: 1,
    nome: 'Christine Ray',
    data: '2023-02-06',
    telefone: '(284) 901-8328',
    email: 'mauris@protonmail.ca',
  },
  {
    codigo: 2,
    nome: 'Eagan Hutchinson',
    data: '2023-02-04',
    telefone: '(892) 511-7166',
    email: 'eget.odio@icloud.org',
  },
  {
    codigo: 3,
    nome: 'Brock Lambert',
    data: '2023-03-09',
    telefone: '1-457-158-4122',
    email: 'nullam.vitae.diam@yahoo.org',
  },
  {
    codigo: 4,
    nome: 'Craig Vinson',
    data: '2024-06-21',
    telefone: '(437) 598-0259',
    email: 'nunc.sed@google.ca',
  },
];

// Listar todos os contatos
router.get('/contatos', contatoController.list);

// Criar um novo contato
router.post('/contatos', contatoController.create);

// Editar um contato já existe
router.put('/contatos/:codigo', function (request, response) {
  const codigo = request.params.codigo;

  let contato = null;

  for (const _contato of listaContatos.entries) {
    if (_contato.codigo == codigo) {
      contato = _contato;
    }
  }

  if (contato == undefined) {
    return response.json({ erro: `Contato #${codigo} não foi encontrado` });
  }

  const nome = request.body.nome;
  const data = request.body.data;
  const telefone = request.body.telefone;
  const email = request.body.email;

  contato.nome = nome;
  contato.data = data;
  contato.telefone = telefone;
  contato.email = email;

  return response.json(contato);
});

// Excluir/remover um contato
router.delete('/contatos/:codigo', function (request, response) {
  const codigo = request.params.codigo;

  let contato = null;

  for (const [indice, _contato] of listaContatos.entries()) {
    if (_contato.codigo == codigo) {
      contato = _contato;
      // Remove através do índice da lista
      listaContatos.splice(indice, 1);
      break;
    }
  }

  if (contato == null) {
    return response.json({ erro: `Contato #${codigo} não foi encontrado` });
  }

  return response.json(contato);
});

module.exports = router;
