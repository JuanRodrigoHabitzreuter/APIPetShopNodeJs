const RepositorieCliente = require("../repositories/cliente");

const repositorio = new RepositorieCliente()

class ServicoCliente {

    Verficarcliente(cliente) {
        if (!cliente) {
            throw new Error('Não foi enviada a cliente para adicionar');
        } else if (!cliente.nome) {
            throw new Error('Não foi enviado o nome da cliente');
        } else if (!cliente.email) {
            throw new Error('Não foi enviado o email da cliente');
        } else if (!cliente.senha) {
            throw new Error('Não foi enviado o senha da cliente');
        }

        return true
    }

    async Exclusivo(id) {
        return repositorio.PegarUm(id);
    }

    async Sociedade() {
        return repositorio.Sociedade();
    }

    async Cadastrar(cliente) {
        this.VerficarCliente(cliente)

        return repositorio.Cadastrar(cliente);
    }

    async Atualizar(id, cliente) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da cliente para alterar');
        }
        this.VerficarCliente(cliente)

        return repositorio.Atualizar(id, cliente);
    }

    async Ocultar(id) {
        return repositorio.Ocultar(id);
    }

}

module.exports = ServicoCliente