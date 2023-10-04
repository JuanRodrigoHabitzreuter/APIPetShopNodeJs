const RepositorieCachorro = require("../repositories/cachorro");

const repositorio = new RepositorieCachorro()

class ServicosCachorro {
    
    VerficarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviada a cachorro para adicionar');
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome da cachorro');
        } else if(!cachorro.email){
            throw new Error('Não foi enviado o email da cachorro');
        } else if(!cachorro.senha){
            throw new Error('Não foi enviado o senha da cachorro');
        }

        return true
    }

    async ChamarUm(id) {
        return repositorio.ChamarUm(id);
    }

    async Matilha() {
        return repositorio.Matilha();
    }S

    async Inserir(cachorro) {
        this.VerficarCachorro(cachorro)

        return repositorio.Inserir(cachorro);
    }

    async Modificar(id, cachorro) {
        if(!id) {
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