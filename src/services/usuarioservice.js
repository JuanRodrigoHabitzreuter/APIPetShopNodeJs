const RepositorieUsuario= require("../repositories/clienterepositorie");

const repositorio = new RepositorieUsuario()

class ServicoUsuario {

    Verficarusuario(usuario) {
        if (!usuario) {
            throw new Error('Não foi enviada a usuario para adicionar');
        } else if (!usuario.email) {
            throw new Error('Não foi enviado o email de usuario');
        } else if (!usuario.senha) {
            throw new Error('Não foi enviado o senha de usuario');
        }
        return true
    }

    async Individuo(id, transaction) {
        console.log('enviando para o repositorio')
        return repositorio.Individuo(id, transaction);        
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
    }


    async Individuos(transaction) {
        return repositorio.Individuos(transaction);
    }

    async Cadastrar(cliente, transaction) {
        this.VerficarCliente(cliente, transaction)

        return repositorio.Cadastrar(cliente, transaction);
    }

    async Incrmentar(id, usuario, transaction) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da usuario para alterar');
        }
        this.Verficarusuario(usuario)

        return repositorio.Incrmentar(id, usuario, transaction);
    }

    async Remover(id, transaction) {
        return repositorio.Remover(id, transaction);
    }

}

module.exports = ServicoUsuario

