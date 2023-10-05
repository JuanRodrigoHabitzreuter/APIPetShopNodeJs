const { describe, expect, it } = require('@jest/globals')

const ServicoCachorro = require("../src/services/cachorro")

describe('Testes Cachorro', () => {
      
      let save

      beforeAll(async () => {
         this.save = await conexao.transaction()
      })
      afterAll(async () => {
         this.save.rollback()
      })

      const servico = new ServicoCachorro()

      it('Mostrar os dados dos cachorro', async () => {
         const result = await servico.ChamarUm(1, this.save)

         expect(result.id).toBe(1);
         expect(result.nome).toBe('Pingo');
         expect(result.raca).toBe('viralata');
      })

      it('Mostrar os dados dos cachorro', async () => {
         const result = await servico.Matilha(1, this.save)

         expect(result.id).toBe(1);
         expect(result.nome).toBe('Pingo');
         expect(result.raca).toBe('viralata');
      })

      it('Mostrar os dados dos cachorro', async () => {
         const result = await servico.Inserir(1, this.save)

         expect(result.id).toBe(1);
         expect(result.nome).toBe('Pingo');
         expect(result.raca).toBe('viralata');
      })

      it('Mostrar os dados dos cachorro', async () => {
         const result = await servico.Modificar(1, this.save)

         expect(result.id).toBe(1);
         expect(result.nome).toBe('Pingo');
         expect(result.raca).toBe('viralata');
      })

      it('Mostrar os dados dos cachorro', async () => {
         const result = await servico.Excluir(1, this.save)

         expect(result.id).toBe(1);
         expect(result.nome).toBe('Pingo');
         expect(result.raca).toBe('viralata');
      })

   })