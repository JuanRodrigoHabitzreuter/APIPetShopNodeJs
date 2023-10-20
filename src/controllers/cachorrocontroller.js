const ServicoCachorro = require("../services/cachorrocservice")

const servico = new ServicoCachorro()

class ControllerCachorro {

    async ChamarUm(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.ChamarUm(req.params.id)
            res.status(200).json({
                cliente: result

// res.status(200).json({
//     nome: cachorro.nome,
//     raca: cachorro.raca,
//     sexo: cachorro.sexo,
//     porte: cachorro.porte,
//     idCliente: { 
//         id: cachorro.cliente.id,
//         nome: cachorro.cliente.nomeCompleto,
//         contato: cachorro.cliente.contato
//     }

    //exibir todas as informações de cliente 
    
})
            
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Matilha(_, res) {
        try {
            const result = await servico.Matilha()
            res.status(200).json({
                clientes: result
   //             cachorros: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Inserir(req, res) {
        try {
            const result = await servico.Inserir(req.body.cliente)
            res.status(201).json({message: 'Cachorro criado com sucesso',
                cliente: result
//cachorro:result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Modificar(req, res) {
        try {
            const result = await servico.Modificar(req.params.id, req.body.cliente)
            res.status(200).json({message: 'Cachorro atualizado com sucesso',
                cliente: result
//cachorro:result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Excluir(req, res) {
        try {
            await servico.Delete(req.params.id)
            res.status(204).json({ message: 'Cachorro deletado com sucesso'})
    
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCachorro


// class CachorroController {

//     async getCachorro(req, res) {
//         try {

//             const id = req.params.id
//             const cachorro = await service.GetCachorro(id)

//             // retornar status 200 e exibir o cachorro e todas as informações de seu cliente 
//             res.status(200).json({
//                 nome: cachorro.nome,
//                 raca: cachorro.raca,
//                 sexo: cachorro.sexo,
//                 porte: cachorro.porte,
//                 idCliente: { 
//                     id: cachorro.cliente.id,
//                     nome: cachorro.cliente.nomeCompleto,
//                     contato: cachorro.cliente.contato
//                 }

//                 // exibir todas as informações de cliente 
                
//             })

//         } catch (err) {
//             res.status(500).json({ message: err.message })
//         }
//     }

   