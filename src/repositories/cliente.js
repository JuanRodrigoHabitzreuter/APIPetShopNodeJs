const Cliente = require('../models/cliente.js')

class RepositorieCliente {

    async Exclusivo(id, transaction) {
        return Cliente.findOne({
            where: { id },
            transaction,
            include: ['cachorros']
        });
    }

    async Sociedade(transaction) {
        return Cliente.findAll({ transaction });
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

    async Dono(id, transaction) {
        try {
            const cliente = await Cliente.findOne({
                where: { id },
                transaction,
                include: [{
                    model: Cachorro, // Modelo de Cachorro
                    as: 'cachorros', // Alias para a relação
                }],
            });

            if (!cliente) {
                throw new Error('Cliente não encontrado.');
            }

            return cliente.cachorros; // Isso retorna os cachorros associados ao cliente
        } catch (error) {
            console.error('Erro ao buscar os cachorros do cliente:', error);
            throw error;
        }
    }
}

module.exports = RepositorieCliente
