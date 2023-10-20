// const Repositorieusuario = require("../repositories/clienterepositorie");

// const repositorio = new RepositorieCliente()

class ServicoAdministrador {

    VerficarAdministrador(administrador) {
        if (!administrador) {
            throw new Error('Não foi enviada a administrador para adicionar');
        } else if (!administrador.email) {
            throw new Error('Não foi enviado o email da administrador');
        } else if (!administrador.senha) {
            throw new Error('Não foi enviado o senha da cliente');
        } else if (!administrador.permissao) {
        throw new Error('Não foi enviado o senha da cliente');
    }
        return true
    }

    async GetSingle(id, transaction) {
        console.log('enviando para o repositorio')
        return repositorio.GetSingle(id, transaction);        
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
    }


    async GetAll(transaction) {
        return repositorio.GetAll(transaction);
    }

    async Add(usuario, transaction) {
        this.VerficarAdministrador(usuario, transaction)

        return repositorio.Add(usuario, transaction);
    }

    async UpDate(id, usuario, transaction) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da usuario para alterar');
        }
        this.VerficarAdministrador(usuario)

        return repositorio.UpDate(id, usuario, transaction);
    }

    async Deletex(id, transaction) {
        return repositorio.Ocultar(id, transaction);
    }    

}

module.exports = ServicoAdministrador

