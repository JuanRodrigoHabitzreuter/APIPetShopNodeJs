const ServicoCliente = require("../services/clienteservice")

const servico = new ServicoCliente()

class ControllerCliente {

    async Exclusivo(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.Exclusivo(req.params.id)
            res.status(200).json({
                nome: cliente.nome,
                telefone: cliente.telefone,
                email: cliente.email,
                cachorroid: cliente.cachorros.map(cachorro => {
                    return {
                        id: cachorro.id,
                        nome: cachorro.nome,
                        raca: cachorro.raca,
                        sexo: cachorro.sexo,                        
                    }
                })
                //                 cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Sociedade(_, res) {
        try {
            const result = await servico.Sociedade()
            res.status(200).json({
                clientes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Cadastrar(req, res) {
        try {
            const result = await servico.Cadastrar(req.body.cliente);
            res.status(201).json({
                message: 'Cliente criado com sucesso',
                cliente: result // Adicione o objeto cliente ao JSON de resposta
            });
        } catch (error) {
            console.error(error); // Use console.error para imprimir erros
            res.status(500).json({ message: error.message }); // Envie o erro como resposta
        }
    }



    async Atualizar(req, res) {
        try {
            const result = await servico.Atualizar(req.params.id, req.body.cliente)
            res.status(200).json({
                message: 'Cliente atualizado com sucesso',
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Ocultar(req, res) {
        try {
            await servico.Delete(req.params.id)
            res.status(204).json({
                message: 'Cliente deletado com sucesso',
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }


    // async Dono(req, res) {
    //     try {
    //         console.log(req.params.id)
    //         const result = await servico.Dono(req.params.id)
    // const clienteId = req.params.id;
    // console.log(`ID do cliente: ${clienteId}`);

    // Chama o serviço para buscar os cachorros do cliente pelo ID
    //       const cachorros = await servico.Dono(clienteId);

    //         res.status(200).json({
    //             cachorros
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ message: "Erro ao buscar os cachorros do cliente." });
    //     }

}


module.exports = ControllerCliente


// async getCliente(req, res) {
//     try {

//         const id = req.params.id
//         const cliente = await service.GetCliente(id)

//         res.status(200).json({
//             nomeCompleto: cliente.nomeCompleto,
//             contato: cliente.contato,
//             idCachorro: cliente.cachorros.map(cachorro => {

//                 return {
//                     id: cachorro.id,
//                     nome: cachorro.nome,
//                     raca: cachorro.raca,
//                     sexo: cachorro.sexo,
//                     porte: cachorro.porte
//                 }
//             })
//         })

//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
