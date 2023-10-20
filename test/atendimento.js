const { describe, expect, it } = require('@jest/globals')

const ServicoAtendimento = require("../src/services/atendimentoservice")
const db = require('../src/database')

describe('Testes Atendimento', () => {


   beforeAll(async () => {
      this.save = await db.transaction()
   })
   afterAll(async () => {
      this.save.rollback()
   })

   const servico = new ServicoAtendimento()

   it('Mostrar os dados do Atendimento', async () => {
      const result = await servico.Exclusivo(1, this.save)

      expect(result.id).toBe(1);
      expect(result.data).toBe('06/10/2023');
      expect(result.hora).toBe('21:00');
      expect(result.valor).toBe('150.00');
      expect(result.concluido).toBe('true');

   })

   it('Mostrar os dados de todos os Atendimento', async () => {
      const result = await servico.Sociedade(1, this.save)

      expect(result.id).toBe(1);
      expect(result.data).toBe('06/10/2023');
      expect(result.hora).toBe('21:00');
      expect(result.valor).toBe('150.00');
      expect(result.concluido).toBe('true');
   })

   it('Cadastrar os dados dos Atendimento', async () => {
      const result = await servico.Cadastrar(1, this.save)

      expect(result.id).toBe(1);
      expect(result.data).toBe('06/10/2023');
      expect(result.hora).toBe('21:00');
      expect(result.valor).toBe('150.00');
      expect(result.concluido).toBe('true');
   })

   it('Atualizar os dados dos Atendimento', async () => {
      const result = await servico.Atualizar(1, this.save)

      expect(result.id).toBe(1);
      expect(result.data).toBe('06/10/2022');
      expect(result.hora).toBe('21:00');
      expect(result.valor).toBe('150.00');
      expect(result.concluido).toBe('false');
   })

   it('Ocultar dados dos Atendimento', async () => {
      const result = await servico.Ocultar(1, this.save)

      expect(result.id).toBe(1);
      expect(result.data).toBe('06/10/2023');
      expect(result.hora).toBe('21:00');
      expect(result.valor).toBe('150.00');
      expect(result.concluido).toBe('true');
   })

})