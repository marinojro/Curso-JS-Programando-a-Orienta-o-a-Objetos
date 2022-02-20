export class SistemaAutenticacao {
    static login(login, senha) {
        if (SistemaAutenticacao.isAutenticavel(login)) {
            return login.autenticar(senha);
        } return false;
    }

    static isAutenticavel(login) {
        return "autenticar" in login && login.autenticar instanceof Function;
    }
}
