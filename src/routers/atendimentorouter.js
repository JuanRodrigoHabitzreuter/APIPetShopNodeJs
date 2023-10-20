const express = require('express')

const ControllerAtendimento = require('../controllers/atendimentocontroller')

const controllerAtendimento = new ControllerAtendimento()

const router = express.Router()

router.get('/api/atendimento/:id', controllerAtendimento.Consulta)
router.get('/api/atendimento/', controllerAtendimento.Historico)
router.post('/api/atendimento', controllerAtendimento.Agenda)
router.put('/api/atendimento/:id', controllerAtendimento.Remarcar)
router.delete('/api/atendimento/:id', controllerAtendimento.Deletar)
router.get('/api/atendimento/:id', controllerAtendimento.Prontuario)
// router.get('/api/atendimentos/:id', atendimentoController.getAtendimentosByCachorroId)

module.exports = router

