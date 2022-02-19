//classe abstrada
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

    //Método Abstrato - Limpamos o código do método sacar da classe Abstrata pois se não sobescrever em um módulo específico de Conta, ao chamar não terá efetio nenhum.
    sacar(valor) {
        throw Error('O método sacar() da Conta é abstrato')
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