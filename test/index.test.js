const { describe, expect, it } = require('@jest/globals')
const ServicoCliente = require("../src/services/cliente")
const ServicosCachorro = require("../src/services/cachorro")

describe('Testes Cliente e Cachorro', () => {
   
   const servico = new ServicoCliente()
   //?não sei se é uma ou 2//?
   const servicos = new ServicosCachorro()

   it('Mostrar os dados dos cliente', async () => {
      const result = await servico.Exclusivo(1)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('João da Silva');
      expect(result.telefone).toBe('987651234');
   })

   it('Mostrar os dados dos cachorros', async () => {
      const result = await servico.Exclusivo(1)
      
      expect(result.id).toBe(1);
      expect(result.nome).toBe('Pingo');
      expect(result.raca).toBe('viralata');
      expect(result.cliente).toBe('João da Silva')
   })
})