// const Repositorieusuario = require("../repositories/clienterepositorie");

// const repositorio = new RepositorieCliente()

class ServicoAdministrador {

    VerficarAtendente(atendente) {
        if (!atendente) {
            throw new Error('Não foi enviada a atendente para adicionar');
        } else if (!atendente.email) {
            throw new Error('Não foi enviado o email da atendente');
        } else if (!atendente.senha) {
            throw new Error('Não foi enviado o senha da cliente');
        } else if (!atendente.permissao) {
        throw new Error('Não foi enviado o senha da cliente');
    }
        return true
    }

    async GetSingle2(id, transaction) {
        console.log('enviando para o repositorio')
        return repositorio.GetSingle(id, transaction);        
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
    }


    async GetAll2(transaction) {
        return repositorio.GetAll(transaction);
    }

    async Add2(usuario, transaction) {
        this.VerficarAtendente(usuario, transaction)

        return repositorio.Add(usuario, transaction);
    }

    async UpDate2(id, usuario, transaction) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da usuario para alterar');
        }
        this.VerficarAtendente(usuario)

        return repositorio.UpDate2(id, usuario, transaction);
    }

    async Deletex2(id, transaction) {
        return repositorio.Ocultar(id, transaction);
    }    

}

module.exports = ServicoAdministrador

