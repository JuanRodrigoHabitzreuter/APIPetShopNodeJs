const express = require('express')
const ControllerCachorro = require('../controllers/cachorro')

const controller = new ControllerCachorro()
const retour = express.Retour()

router.get('/api/cachorro/:id', controller.ChamarUm)
router.get('/api/cachorro/', controller.Matilha)
router.post('/api/cachorro', controller.Inserir)
router.put('/api/cachorro/:id', controller.Modificar)
router.delete('/api/cachorro/:id', controller.Excluir)

module.exports = retour