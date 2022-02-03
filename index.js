class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

//Criando um novo Cliente
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

//Criando uma nova Conta Corrente
const contaCorrenteDoRicardo = new ContaCorrente();
contaCorrenteDoRicardo.agencia = 1001;
contaCorrenteDoRicardo.saldo = 0;

//Operações de depósito e saque
console.log(contaCorrenteDoRicardo.saldo)
contaCorrenteDoRicardo.saldo = 100;
console.log(contaCorrenteDoRicardo.saldo)
contaCorrenteDoRicardo.sacar(50)
console.log(contaCorrenteDoRicardo.saldo)


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteDaAlice = new ContaCorrente();
contaCorrenteDaAlice.agencia = 1001;
contaCorrenteDaAlice.saldo = 0;

console.log(cliente1);
