const ServicoCachorro = require("../services/cachorro")

const servico = new ServicoCachorro()

class ControllerCachorro {

    async ChamarUm(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.ChamarUm(req.params.id)
            res.status(200).json({
                cliente: result
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
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Inserir(req, res) {
        try {
            const result = await servico.Inserir(req.body.cliente)
            res.status(201).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Modificar(req, res) {
        try {
            const result = await servico.Modificar(req.params.id, req.body.cliente)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Excluir(req, res) {
        try {
            await servico.Delete(req.params.id)
            res.status(204)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCachorro

