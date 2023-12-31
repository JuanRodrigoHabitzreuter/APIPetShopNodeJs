const RepositorieCliente = require("../repositories/clienterepositorie");

const repositorio = new RepositorieCliente()

class ServicoCliente {

    Verficarcliente(cliente) {
        if (!cliente) {
            throw new Error('Não foi enviada a cliente para adicionar');
        } else if (!cliente.nome) {
            throw new Error('Não foi enviado o nome da cliente');
        } else if (!cliente.telefone) {
            throw new Error('Não foi enviado o telefone da cliente');
        }
        return true
    }

    async Exclusivo(id, transaction) {
        console.log('enviando para o repositorio')
        return repositorio.Exclusivo(id, transaction);        
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email);
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

   
    // async Dono(clienteId, transaction) {
    //     return repositorio.Dono(clienteId, transaction)
        // try {
        //     // Buscar o cliente pelo ID
        //     const cliente = await Cliente.findByPk(clienteId, transaction);

        //     if (!cliente) {
        //         throw new Error('Cliente não encontrado.');
        //     }

        //     // Buscar os cachorros associados ao cliente
        //     const cachorros = await Cachorro.findAll({
        //         where: { clienteId: cliente.id },
        //     });

        //     return cachorros;
        // } catch (error) {
        //     throw error;
        // }
    

}

module.exports = ServicoCliente

