import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//Criando um novo Cliente
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 12345678910);

//Criando uma nova Conta Corrente
const conta1 = new ContaCorrente(cliente1, 1001);
conta1.saldo = 0;

const conta2 = new ContaCorrente(cliente2, 1001);
conta2.saldo = 0;


//Operações de depósito e saque
conta1.depositar(100);
conta1.depositar(-100) //não deposita pois o número é negativo, validado na classe
conta1.sacar(100);
conta1.depositar(600);

//transferencia
conta1.transferir(600, conta2);

console.log(conta1);
console.log(conta2);