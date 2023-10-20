const ServicoAdministrador = require("../services/administradorservice")

const servico = new ServicoAdministrador()

class ControllerAdministrador {

    async GetSingle(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.GetSingle(req.params.id)
            res.status(200).json({
                nome: cliente.nome,
               
                cachorroid: cliente.cachorros.map(cachorro => {
                    return {
                        id: cachorro.id,
                                                
                    }
                })
                //                 cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async GetAll(_, res) {
        try {
            const result = await servico.GetAll()
            res.status(200).json({
                administradores: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res) {
        try {
            const result = await servico.Add(req.body.administrador);
            res.status(201).json({
                message: 'Administrador criado com sucesso',
                administrador: result // Adicione o objeto cliente ao JSON de resposta
            });
        } catch (error) {
            console.error(error); // Use console.error para imprimir erros
            res.status(500).json({ message: error.message }); // Envie o erro como resposta
        }
    }

    async UpDate(req, res) {
        try {
            const result = await servico.UpDate(req.params.id, req.body.administrador)
            res.status(200).json({
                message: 'Administrador atualizado com sucesso',
                administrador: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Deletex(req, res) {
        try {
            await servico.Delete(req.params.id)
            res.status(204).json({
                message: 'Administrador deletado com sucesso',
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
}

module.exports = ControllerAdministrador

