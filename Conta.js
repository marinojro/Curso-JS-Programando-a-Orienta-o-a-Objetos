export class Conta {

    constructor(saldo, cliente, agencia) {
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
        if (this.constructor == Conta) {
            throw new Error('você não deveria instanciar a classe conta')
        }
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        let taxa = 1
        return this._sacar(valor, taxa)
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valor;
        }
        return 0;
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
        this._saldo += valor;
    }

    transferir(valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    }
}