const Validator = require('validatorjs');
const connection = require('../configs/mysql.config');

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

/**
 * Função que deve receber um identificador (código)
 * e retornar o contato correspondente
 */
function show(req, res) {
  const codigo = req.params.codigo;

  if (codigo == undefined) {
    return res.json({ erro: 'Ocorreram erros ao buscar a informação' });
  }

  connection.query('SELECT con.*, cat.nome categoria FROM contatos con, categorias cat WHERE id_cat = id_cat_fk AND id_con = ?',
    [codigo], function (err, resultado) {
      if (err) {
        return res.json({ erro: 'Ocorreram erros ao tentar salvar a informação' });
      }

      if (resultado.length == 0) {
        return res.json({ erro: `O código #${codigo} não foi encontrado!` });
      }

      return res.json(resultado[0]);

    });
}

function list(request, response) {
  connection.query('SELECT con.*, cat.nome categoria ' + 
  ' FROM contatos con, categorias cat WHERE id_cat = id_cat_fk', function (err, resultado) {
    if (err) {
      return response.json({ erro: 'Ocorreram erros ao buscar os dados' });
    }
    return response.json({ dados: resultado });
  });
}

function create(request, response) {

  const regras = {
    nome: 'required|min:5',
    data: 'required|date',
    telefone: 'required',
    email: 'required|email',
    categoria: 'required|integer'
  };

  const validacao = new Validator(request.body, regras);

  if (validacao.fails()) {
    return response.json(validacao.errors);
  }

  const { nome, data, telefone, email, categoria } = request.body;

  connection.query('INSERT INTO contatos ' + 
  '(nome, data_nasc, telefone, email, id_cat_fk) VALUES (?, ?, ?, ?, ?)', [
    nome, data, telefone, email, categoria
  ], function (err, resultado) {

    if (err) {
      return response.json({ erro: 'Ocorreram erros ao tentar salvar a informação' });
    }

    if (resultado.affectedRows == 0) {
      return response.json({ erro: 'Ocorreram erros ao tentar salvar a informação' });
    }

    return response.json({
      nome,
      data,
      telefone,
      email,
      id: resultado.insertId
    });

  });
}

function update(request, response) {
  const codigo = request.params.codigo;

  let contato = null;

  for (const _contato of listaContatos.entries) {
    if (_contato.codigo == codigo) {
      contato = _contato;
    }
  }

  const nome = request.body.nome;
  const data = request.body.data;
  const telefone = request.body.telefone;
  const email = request.body.email;

  if (nome == undefined || nome == "" || data == undefined || data == "") {
    return response.json({ erro: "Informação incompleta" });
  }

  contato.nome = nome;
  contato.data = data;
  contato.telefone = telefone;
  contato.email = email;

  return response.json(contato);
}

function destroy(request, response) {
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
}

module.exports = { show, list, create, update, destroy };
