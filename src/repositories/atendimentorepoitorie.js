
const Atendimento = require('../models/atendimentomodel.js')
class RepositorieAtendimento {

    async Consulta(id, transaction) {
        return Atendimento.findOne({
            where: { id },
            transaction,
            include: 'cachorro'

        });
    }

    async Historico(transaction) {
        return Atendimento.findAll({ transaction });
    }

    async Agenda(atendimento, transaction) {
        const result = await Atendimento.create(atendimento, { transaction })

        console.log(result)

        return result
    }

    async Remarcar(id, atendimento, transaction) {
        const result = await Atendimento.Remarcar(atendimento, {
            where: { id },
            transaction
        });

        console.log(result)

        return result
    }

    async Deletar(id) {
        return Atendimento.destroy({
            where: { id },
            transaction
        });
    }

    async Prontuario(id, transaction) {
        try {
            const Atendimento = await Atendimento.findOne({
                where: { id },
                transaction,
                include: [{
                    model: Cachorro, // Modelo de Cachorro
                    as: 'cachorros', // Alias para a relação
                }],
            });

            if (!atendimento) {
                throw new Error('Atendimento não encontrado.');
            }

            return atendimento.cachorros; // Isso retorna os cachorros associados ao Atendimento
        } catch (error) {
            console.error('Erro ao buscar os cachorros do Atendimento:', error);
            throw error;
        }
    }


    async getAtendimentosByCachorroId(id) {
        return await Atendimento.findAll({
            where: { id_cachorro: id }
        })


    }
}
module.exports = RepositorieAtendimento


