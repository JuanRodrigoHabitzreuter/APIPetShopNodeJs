const express = require('express')

const ControllerCachorro = require('../controllers/cachorrocontroller')

const controllerCachorro = new ControllerCachorro()

const router = express.Router()

router.get('/api/cachorro/:id', controllerCachorro.ChamarUm)
router.get('/api/cachorro/', controllerCachorro.Matilha)
router.post('/api/cachorro', controllerCachorro.Inserir)
router.put('/api/cachorro/:id', controllerCachorro.Modificar)
router.delete('/api/cachorro/:id', controllerCachorro.Excluir)

module.exports = router

