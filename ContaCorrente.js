import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static quantidadeDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.quantidadeDeContas += 1;
    }

    //Sobrescrevendo o comportamento sacar da classe mãe Conta.js
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa)
    }
}