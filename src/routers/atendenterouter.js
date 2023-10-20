const express = require('express')
const ControllerAdministrador= require('../controllers/administradorcontroller')
const authmiddleware = require('../middleware/auth')

const controllerAtendente = new ControllerAtendente()

const router = express.Router()

router.get('/api/atendente/:id', authmiddleware, ControllerAtendente.GetSingle2)
router.get('/api/atendente/', authmiddleware, ControllerAtendente.GetAll2)
router.post('/api/atendente', authmiddleware, ControllerAtendente.Add2)
router.put('/api/atendente/:id', authmiddleware, ControllerAtendente.UpDate2)
router.delete('/api/atendente/:id', authmiddleware, ControllerAtendente.Deletex2)

module.exports = router

