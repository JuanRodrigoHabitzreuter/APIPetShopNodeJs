const Cliente = require('../models/cliente.js')

class RepositorieCliente {

    async Exclusivo(id) {
        return Cliente.findOne({
            where: { id }
        });
    }
    
    async Sociedade() {
        return Cliente.findAll();
    }

    async Cadastrar(cliente) {
        const result = await Cliente.create(cliente)

        console.log(result)

        return result
    }

    async Atualizar(id, cliente) {
        const result = await Cliente.Atualizar(cliente, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Ocultar(id) {
        return Cliente.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieCliente