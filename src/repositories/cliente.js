const Cliente = require('../models/cliente.js')

class RepositorieCliente {

    async Exclusivo(id, transaction) {
        return Cliente.findOne({
            where: { id },
            transaction,
            include: 'Cachorros' 

        });
    }

    async Sociedade(transaction) {
        return Cliente.findAll(transaction);
    }

    async Cadastrar(cliente, transaction) {
        const result = await Cliente.create(cliente, { transaction })

        console.log(result)

        return result
    }

    async Atualizar(id, cliente, transaction) {
        const result = await Cliente.Atualizar(cliente, {
            where: { id },
            transaction
        });

        console.log(result)

        return result
    }

    async Ocultar(id) {
        return Cliente.destroy({
            where: { id },
            transaction
        });
    }

}

module.exports = RepositorieCliente