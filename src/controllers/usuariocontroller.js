const ServicoUsuario = require("../services/usuarioservice")

const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res) {
        // const email = req.body.email;
        // const senha = req.body.senha;
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const { dataValues: cliente } = await servico.PegarUmPorEmail(email)

        if (!cliente) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        if (!(await bcrypt.compare(senha, cliente.senha))) {
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválido" });
        }

        const token = jwt.sign(
            { id: cliente.id, email: cliente.email, nome: cliente.nome },
            config.secrect
        )

        res.json({ token })
    }


    async Individuo(req, res) {
        try {
            console.log(req.params.id)
            const result = await servico.Individuo(req.params.id)
            res.status(200).json({
                permissao: usario.permissao,
                email: usuario.email,
                senha: usuario.senha,
               clienteid: usuario.cliente.map(usuario => {
                    return {
                        id: cliente.id,
                        nome: cliente.nome,
                        email: cliente.email,
                        telefone: cliente.telefone,
                    }
                })
                //                 cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Individuos(_, res) {
        try {
            const result = await servico.Individuos()
            res.status(200).json({
                clientes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Registrar(req, res) {
        try {
            const result = await servico.Registrar(req.body.usuario);
            res.status(201).json({
                message: 'Usuario criado com sucesso',
                usuario: result // Adicione o objeto cliente ao JSON de resposta
            });
        } catch (error) {
            console.error(error); // Use console.error para imprimir erros
            res.status(500).json({ message: error.message }); // Envie o erro como resposta
        }
    }



    async Incrementar(req, res) {
        try {
            const result = await servico.Incrementar(req.params.id, req.body.usuario)
            res.status(200).json({
                message: 'Usuario atualizado com sucesso',
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Remover(req, res) {
        try {
            await servico.Delete(req.params.id)
            res.status(204).json({
                message: 'Usuario deletado com sucesso',
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}


module.exports = ControllerUsuario

