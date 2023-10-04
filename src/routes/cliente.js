const express = require('express')
const ControllerCliente = require('../controllers/cliente')

const controller = new ControllerCliente()
const router = express.Router()

router.get('/api/cliente/:id', controller.Exclusivo)
router.get('/api/cliente/', controller.Sociedade)
router.post('/api/cliente', controller.Cadastrar)
router.put('/api/cliente/:id', controller.Atualizar)
router.delete('/api/cliente/:id', controller.Ocultar)

module.exports = router