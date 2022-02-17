import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

//Criando um novo Cliente
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 12345678910);

//Criando uma nova Conta Corrente
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1001);

//Criando uma nova Conta Poupança
const contaPoupanca1 = new ContaPoupanca(5, cliente1, 1001);
const contaPoupanca2 = new ContaPoupanca(0, cliente2, 1001);

//Instanciando a classe mãe Conta para testar o erro
//const contaErrada = new Conta(0, cliente1, 1001)


//Operações de depósito e saque
conta1.depositar(200);
conta1.depositar(-300) //não deposita pois o número é negativo, validado na classe
conta1.sacar(100);
conta1.depositar(600);

//transferencia
conta1.transferir(600, conta2);

//extrato
//console.log(contaErrada);
console.log(conta1);
console.log(contaPoupanca1);
console.log("Existe(m) " + ContaCorrente.quantidadeDeContas + " conta(s)");