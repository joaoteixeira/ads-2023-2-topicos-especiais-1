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
function show(request, response) {
  // Implementar
}

function list(request, response) {
  return response.json({ dados: listaContatos });
}

function create(request, response) {
  const nome = request.body.nome;
  const data = request.body.data;
  const telefone = request.body.telefone;
  const email = request.body.email;

  const quantidade = listaContatos.length;

  const novoContato = {
    codigo: quantidade + 1,
    nome: nome,
    data: data,
    telefone: telefone,
    email: email,
  };

  listaContatos.push(novoContato);

  return response.json(novoContato);
}

function update(request, response) {
  // Implementar
}

function destroy(request, response) {
  // Implementar
}

module.exports = { list, create, update, destroy };
