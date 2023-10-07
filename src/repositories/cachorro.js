const Cachorro = require('../models/cachorro.js')

class RepositorieCachorro {

    async ChamarUm(id, transaction) {
        return Cachorro.findOne({
            where: { id },
            transaction
        });
    }

    async Matilha(transaction) {
        return Cachorro.findAll({
            transaction
        });
    }

    async Inserir(cachorro, transaction) {
        const result = await Cachorro.create(cachorro, { transaction })

        console.log(result)

        return result
    }

    async Modificar(id, cachorro, transaction) {
        const result = await Cachorro.Modificar(cachorro, {
            where: {
                id
            },
            transaction
        })

        console.log(result)

        return result
    }

    async Excluir(id, transaction) {
        return Cachorro.destroy({
            where: { id },
            transaction
        });
    }

}

module.exports = RepositorieCachorro