const express = require('express')
const ControllerUsuario = require('../controllers/usuariocontroller')
const authmiddleware = require('../middleware/auth')

const controllerUsuario = new ControllerUsuario()

const router = express.Router()

router.get('/api/usuario/:id', controllerUsuario.Login)
router.get('/api/usuario/:id', authmiddleware, controllerUsuario.Individuo)
router.get('/api/usuario/', authmiddleware, controllerUsuario.Individuos)
router.post('/api/usuario', authmiddleware, controllerUsuario.Registrar)
router.put('/api/usuario/:id', authmiddleware, controllerUsuario.Incrementar)
router.delete('/api/usuario/:id', authmiddleware, controllerUsuario.Remover)

module.exports = router

