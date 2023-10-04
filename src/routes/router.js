const express = require('express')
const ControllerCliente = require('../controllers/cliente')
const ControllerCachorro = require( '../controllers/cachorro')

const controllerCliente = new ControllerCliente()
const controllerCachorro = new ControllerCachorro()

const router = express.Router()

router.get('/api/cliente/:id', controllerCliente.Exclusivo)
router.get('/api/cliente/', controllerCliente.Sociedade)
router.post('/api/cliente', controllerCliente.Cadastrar)
router.put('/api/cliente/:id', controllerCliente.Atualizar)
router.delete('/api/cliente/:id', controllerCliente.Ocultar)

router.get('/api/cachorro/:id', controllerCachorro.ChamarUm)
router.get('/api/cachorro/', controllerCachorro.Matilha)
router.post('/api/cachorro', controllerCachorro.Inserir)
router.put('/api/cachorro/:id', controllerCachorro.Modificar)
router.delete('/api/cachorro/:id', controllerCachorro.Excluir)

module.exports = router

