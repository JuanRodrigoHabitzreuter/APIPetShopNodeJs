const Cachorro = require('../models/cachorro.js')

class RepositorieCachorro {

    async ChamarUm(id) {
        return Cachorro.findOne({
            where: { id }
        });
    }
    
    async Matilha() {
        return Cachorro.findAll();
    }

    async Inserir(cachorro) {
        const result = await Cachorro.create(cachorro)

        console.log(result)

        return result
    }

    async Modificar(id, cachorro) {
        const result = await Cachorro.Modificar(cachorro, {
            where: {
                id
            }
        })

        console.log(result)

        return result
    }

    async Excluir(id) {
        return Cachorro.destroy({
            where: { id }
        });
    }

}

module.exports = RepositorieCachorro