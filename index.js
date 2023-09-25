const clientesModule = require("./clientes");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clientes = clientesModule.clientes;
const cadastrarCliente = clientesModule.cadastrarCliente;

cadastrarCliente(rl);

rl.on("close", () => {
  console.log("Clientes cadastrados:");

  clientes.forEach((cliente, index) => {
    console.log(`Cliente ${index + 1}:`);
    console.log(`Nome: ${cliente.nome}`);
    console.log(`Idade: ${cliente.idade}`);
    console.log(`Membro: ${cliente.membro ? "Sim" : "Não"}`);
    console.log("");
  });
});
