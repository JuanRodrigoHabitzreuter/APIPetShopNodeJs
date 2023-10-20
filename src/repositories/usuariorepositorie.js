const Usuario = require('../models/clientemodel.js')
const bcrypt = require('bcrypt')

class RepositorieUsuario {

    async Individuo( transaction) {
      
        return Usuario.findOne({
            where: { email, senha },
            transaction,
            include: 'clientes'
        });
    }

    async PegarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }

    async Individuos(transaction) {
        return Usuario.findAll({ transaction });
    }

    async Registrar(usuario, transaction) {
        const hashSenha = await bcrypt.hash(usuario.senha)
        usuario.senha = hashSenha
        const result = await Usuario.create(usuario, { transaction })

        console.log(result)

        return result
    }

    async Incrementar(/*id,*/ cliente, transaction) {
        // const result = await Cliente.Atualizar(cliente, {
        //     where: { id },
        //     transaction
        // });

        // console.log(result)

        // return result
        const hashSenha = await bcrypt.hash(usuario.senha, 10)

        usuario.senha = hashSenha
        const result = await Usuario.create(
            usuario,
            { transaction }
        )
    
        // const result = await Pessoa.create(
        //     { ...pessoa, senha: hashSenha },
        //     { transaction }
        // )


        return result
    }

    

    async Remover(id) {
        return Usuario.destroy({
            where: { id },
            transaction
        });
    }

}

module.exports = RepositorieUsuario

