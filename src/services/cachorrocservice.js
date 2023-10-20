const RepositorieCachorro = require("../repositories/cachorrorepositorie");

const repositorio = new RepositorieCachorro()

class ServicosCachorro {

    VerficarCachorro(cachorro) {
        if (!cachorro) {
            throw new Error('Não foi enviada a cachorro para adicionar');
        } else if (!cachorro.nome) {
            throw new Error('Não foi enviado o nome da cachorro');
        } else if (!cachorro.raca) {
            throw new Error('Não foi enviado o raca da cachorro');
        }
        return true
    }

    async ChamarUm(id) {
        return repositorio.ChamarUm(id);
    }

    async Matilha() {
        return repositorio.Matilha();
    } S

    async Inserir(cachorro) {
        this.VerficarCachorro(cachorro)

        return repositorio.Inserir(cachorro);
    }

    async Modificar(id, cachorro) {
        if (!id) {
            throw new Error('Não foi enviada o identificador da cachorro para alterar');
        }
        this.VerficarCachorro(cachorro)

        return repositorio.Modificar(id, cachorro);
    }

    async Excluir(id) {
        return repositorio.Excluir(id);
    }

}

module.exports = ServicosCachorro


    // async CreateCachorro(cachorro) {

    //     if (!cachorro.nome || !cachorro.raca || !cachorro.sexo || !cachorro.porte || !cachorro.idCliente) {
    //         throw new Error('Nome, raça, sexo, porte e id do cliente são obrigatórios')

    //     } else if (cachorro.nome.length < 3 || cachorro.nome.length > 50) {
            
    //         throw new Error('Nome inválido')
        
    //     } else if (cachorro.raca.length < 3 || cachorro.raca.length > 50) {
            
    //         throw new Error('Raça inválida')

    //     } else if (cachorro.sexo.length < 1) {

    //         throw new Error('Sexo inválido')

    //     } else if (cachorro.porte.length < 1) {
                
    //             throw new Error('Porte inválido')
    
    //         }
    //     else { 
    //         return await repository.create(cachorro)
    //     }
    // }

    // async UpdateCachorro(id, cachorro) {

    //     if (!await repository.getId(id)) {

    //         throw new Error('Cachorro não encontrado')

    //     } else if (!cachorro.nome || !cachorro.raca || !cachorro.sexo || !cachorro.porte || !cachorro.idCliente) {

    //         throw new Error('Nome, raça, sexo, porte e id do cliente são obrigatórios')

    //     } else if (cachorro.nome.length < 3 || cachorro.nome.length > 50) {

    //         throw new Error('Nome inválido')

    //     } else if (cachorro.raca.length < 3 || cachorro.raca.length > 50) {

    //         throw new Error('Raça inválida')

    //     } else if (cachorro.sexo.length < 1) {

    //         throw new Error('Sexo inválido')

    //     } else if (cachorro.porte.length < 1) {
    //         throw new Error('Porte inválido')

    //     } else {
    //         return await repository.update(id, cachorro)

    //     }
