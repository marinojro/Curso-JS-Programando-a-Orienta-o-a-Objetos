export class SistemaAutenticacao{
    static login(nome, senha) {
        return nome.senha == senha;
    }
}