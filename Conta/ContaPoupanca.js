import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldo, cliente, agencia) {
        super(saldo, cliente, agencia);
    }
}