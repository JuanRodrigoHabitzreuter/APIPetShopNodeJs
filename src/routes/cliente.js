const express = require('express')

const ControllerCliente = require('../controllers/cliente')

const controllerCliente = new ControllerCliente()

const router = express.Router()

router.get('/api/cliente/:id', controllerCliente.Exclusivo)
router.get('/api/cliente/', controllerCliente.Sociedade)
router.post('/api/cliente', controllerCliente.Cadastrar)
router.put('/api/cliente/:id', controllerCliente.Atualizar)
router.delete('/api/cliente/:id', controllerCliente.Ocultar)

module.exports = router

