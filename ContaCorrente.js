import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static quantidadeDeContas = 0;
    agencia;
    saldo;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    constructor(cliente, agencia, saldo) {
        this.cliente = cliente;
        this.agencia = agencia;
        this.saldo = saldo;
        ContaCorrente.quantidadeDeContas += 1;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        /* if(valor >= 0){
             this.saldo += valor;
         }
         outra forma de escrever */

        //verificar tudo que eu não quero com um return para parar o código
        if (valor <= 0) {
            return;
        }
        this.saldo += valor;
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}