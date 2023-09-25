module.exports.clientes = [];

module.exports.cadastrarCliente = function (rl) {
  rl.question("Digite o nome do cliente: ", (nome) => {
    rl.question("Digite a idade do cliente: ", (idade) => {
      rl.question("O cliente é membro? (Digite 'Sim' ou 'Não'): ", (membro) => {
        membro = membro.trim().toLowerCase() === "sim";

        const cliente = { nome, idade, membro };

        module.exports.clientes.push(cliente);

        rl.question("Deseja cadastrar um novo cliente? ('Sim' ou 'Não'): ", (resposta) => {
          if (resposta.trim().toLowerCase() === "sim") {
            module.exports.cadastrarCliente(rl);
          } else {
            rl.close();
          }
        });
      });
    });
  });
};
