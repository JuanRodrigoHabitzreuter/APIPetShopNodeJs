const express = require('express')
const ControllerAdministrador= require('../controllers/administradorcontroller')
const authmiddleware = require('../middleware/auth')

const controllerAdministrador = new ControllerAdministrador()

const router = express.Router()

router.get('/api/administrador/:id', authmiddleware, ControllerAdministrador.GetSingle)
router.get('/api/administrador/', authmiddleware, ControllerAdministrador.GetAll)
router.post('/api/administrador', authmiddleware, ControllerAdministrador.Add)
router.put('/api/administrador/:id', authmiddleware, ControllerAdministrador.UpDate)
router.delete('/api/administrador/:id', authmiddleware, ControllerAdministrador.Deletex)

module.exports = router

