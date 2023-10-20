const express = require('express')
const ControllerCliente = require('../controllers/clientecontroller')
const authmiddleware = require('../middleware/auth')

const controllerCliente = new ControllerCliente()

const router = express.Router()

router.get('/api/cliente/:id', authmiddleware, controllerCliente.Exclusivo)
router.get('/api/cliente/', authmiddleware, controllerCliente.Sociedade)
router.post('/api/cliente', authmiddleware, controllerCliente.Cadastrar)
router.put('/api/cliente/:id', authmiddleware, controllerCliente.Atualizar)
router.delete('/api/cliente/:id', authmiddleware, controllerCliente.Ocultar)
// router.get('/api/cliente/:id', controllerCliente.Dono)

module.exports = router

