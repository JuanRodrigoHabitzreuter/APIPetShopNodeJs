const ServicoCliente = require("../services/cliente")

const servico = new ServicoCliente()

class ControllerCliente {

    async Exclusivo(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.Exclusivo(req.params.id)
            res.status(200).json({
                cliente: result
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
            const result = await servico.Cadastrar(req.body.cliente)
            res.status(201).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Atualizar(req, res) {
        try {
            const result = await servico.Atualizar(req.params.id, req.body.cliente)
            res.status(200).json({
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
            res.status(204)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
}

module.exports = ControllerCliente
