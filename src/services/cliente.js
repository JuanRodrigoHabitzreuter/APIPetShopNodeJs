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

    async Exclusivo(id, transaction) {
        return repositorio.PegarUm(id, transaction);
    }

    async Sociedade(transaction) {
        return repositorio.Sociedade(transaction);
    }

    async Cadastrar(cliente, transaction) {
        this.VerficarCliente(cliente, transaction)

        return repositorio.Cadastrar(cliente, transaction);
    }

    async Atualizar(id, cliente, transaction) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da cliente para alterar');
        }
        this.VerficarCliente(cliente)

        return repositorio.Atualizar(id, cliente, transaction);
    }

    async Ocultar(id, transaction) {
        return repositorio.Ocultar(id, transaction);
    }

}

module.exports = ServicoCliente