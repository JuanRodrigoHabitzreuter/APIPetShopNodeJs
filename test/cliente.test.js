const { describe, expect, it } = require('@jest/globals')

const ServicoCliente = require("../src/services/cliente")

describe('Testes Cliente', () => {

   let save
  
   beforeAll(async () => {
      this.save = await conexao.transaction()
   })
   afterAll(async () => {
      this.save.rollback
      ()
   })

   const servico = new ServicoCliente()

   it('Mostrar os dados dos cliente', async () => {
      const result = await servico.Exclusivo(1, this.save)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Mostrar os dados dos cliente', async () => {
      const result = await servico.Sociedade(1, this.save)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Mostrar os dados dos cliente', async () => {
      const result = await servico.Cadastrar(1, this.save)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Mostrar os dados dos cliente', async () => {
      const result = await servico.Atualizar(1, this.save)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Mostrar os dados dos cliente', async () => {
      const result = await servico.Ocultar(1, this.save)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

})