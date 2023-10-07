const RepositorieAtendimento = require("../repositories/atendimento");

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

        return repositorio.Agenda(atendimento, transaction);
    }

    async Remarcar(id, atendimento, transaction) {
        if (!id) {
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
}

module.exports = ServicoAtendimento
