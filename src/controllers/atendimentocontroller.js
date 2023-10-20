const ServicoAtendimento = require("../services/atendimentoservice")

const servico = new ServicoAtendimento()

class ControllerAtendimento {

    async Consulta(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.Consulta(req.params.id)
            res.status(200).json({
                Atendimento: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Historico(_, res) {
        try {
            const result = await servico.Historico()
            res.status(200).json({
                Atendimentos: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Agenda(req, res) {
        try {
            const result = await servico.Agenda(req.body.Atendimento)
            res.status(201).json({ message: 'Agenda criado com sucesso' })
            Atendimento: result

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Remarcar(req, res) {
        try {
            const result = await servico.Remarcar(req.params.id, req.body.Atendimento)
            res.status(200).json({ message: 'Atendimento atualizado com sucesso' })
            Atendimento: result

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Deletar(req, res) {
        try {
            await servico.Delete(req.params.id)
            res.status(204).json({ message: 'Atendimento deletado com sucesso' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Prontuario(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.Prontuario(req.params.id)
            // const AtendimentoId = req.params.id;
            // console.log(`ID do Atendimento: ${AtendimentoId}`);

            // Chama o serviço para buscar os cachorros do Atendimento pelo ID
            //    const cachorros = await servico.Dono(AtendimentoId);

            res.status(200).json({
                cachorros
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar os cachorros do Atendimento." });
        }
    }
    async getAtendimentosByCachorroId(req, res) {
        try {

            const id = req.params.id
            const atendimentos = await service.GetAtendimentosByCachorroId(id)

            res.status(200).json(atendimentos)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }


}

module.exports = ControllerAtendimento


