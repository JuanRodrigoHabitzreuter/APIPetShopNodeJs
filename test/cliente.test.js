const { describe, expect, it } = require('@jest/globals')

const ServicoCliente = require("../src/services/cliente")
const conexao = require('../src/database')

describe('Testes Cliente', () => {


   beforeAll(async () => {
      this.save = await conexao.transaction()
   })
   afterAll(async () => {
      this.save.rollback()
   })

   const servico = new ServicoCliente()

   it('Mostrar os dados do cliente', async () => {
      const result = await servico.Exclusivo(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Mostrar os dados de todos os cliente', async () => {
      const result = await servico.Sociedade(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Cadastrar os dados dos cliente', async () => {
      const result = await servico.Cadastrar(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Atualizar os dados dos cliente', async () => {
      const result = await servico.Atualizar(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('João de Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Ocultar dados dos cliente', async () => {
      const result = await servico.Ocultar(1, this.save)

      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

})