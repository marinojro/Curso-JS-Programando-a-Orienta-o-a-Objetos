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

    depositar(valor){
       /* if(valor >= 0){
            this.saldo += valor;
        }
        outra forma de escrever */

        //verificar tudo que eu não quero com um return para parar o código
        if(valor <= 0) {
            return;
        }
        this.saldo += valor;
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
contaCorrenteDoRicardo.depositar(100);
contaCorrenteDoRicardo.depositar(-100) //não deposita pois o número é negativo, validado na classe

const valorSacado = contaCorrenteDoRicardo.sacar(50);
console.log(valorSacado)


console.log(contaCorrenteDoRicardo)