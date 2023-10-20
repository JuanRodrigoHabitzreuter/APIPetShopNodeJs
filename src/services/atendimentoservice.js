const RepositorieAtendimento = require("../repositories/atendimentorepoitorie");

const repositorio = new RepositorieAtendimento()

class ServicoAtendimento {

    VerficarAtendimento(atendimento) {
        if (!atendimento) {
            throw new Error('Não foi enviada a Atendimento para adicionar');
        } else if (!atendimento.data) {
            throw new Error('Não foi enviado o data da Atendimento');
        } else if (!atendimento.hora) {
            throw new Error('Não foi enviado o hora da Atendimento');
        } else if (!atendimento.valor) {
            throw new Error('Não foi enviado o valor da Atendimento');
        } else if (!atendimento.concluido) {
            throw new Error('Não foi enviado o concluido da Atendimento');
        }


        return true
    }

    async Consulta(id, transaction) {
        return repositorio.Consulta(id, transaction);
    }

    async Historico(transaction) {
        return repositorio.Historico(transaction);
    }

    async Agenda(atendimento, transaction) {
        this.VerficarAtendimento(atendimento, transaction)
        if (!atendimento.data || !atendimento.valor || !atendimento.idCachorro) {

            throw new Error('Data, valor e id do cachorro são obrigatórios')

        } else if (atendimento.data.length < 1) {

            throw new Error('Data inválida')

        } else if (atendimento.valor.length < 1) {

            throw new Error('Valor inválido')

        } else {
            return await repository.create(atendimento)
        }

        return repositorio.Agenda(atendimento, transaction);
    }

    async Remarcar(id, atendimento, transaction) {
        if (!id) {
            if (!await repository.getId(id)) {

                throw new Error('Atendimento não encontrado')

            } else if (!atendimento.data || !atendimento.valor || !atendimento.idCachorro) {

                throw new Error('Data, valor e id do cachorro são obrigatórios')

            } else if (atendimento.data.length < 1) {

                throw new Error('Data inválida')

            } else if (atendimento.valor.length < 1) {

                throw new Error('Valor inválido')

            } else {
                return await repository.update(id, atendimento)

            }
            throw new Error('Não foi enviada o identificador da Atendimento para alterar');
        }
        this.VerficarAtendimento(atendimento)

        return repositorio.Remarcar(id, atendimento, transaction);
    }

    async Deletar(id, transaction) {
        return repositorio.Deletar(id, transaction);
    }

    async Prontuario(atendimentoId, transaction) {
        return repositorio.Prontuario(atendimentoId, transaction)

    }

    async GetAtendimentosByCachorroId(cachorroId) {

        if (!await repository.getAtendimentosByCachorroId(cachorroId)) {
            throw new Error('Cachorro não possui atendimentos cadastrados')

        } else {
            return await repository.getAtendimentosByCachorroId(cachorroId)
        }
    }
}

module.exports = ServicoAtendimento


