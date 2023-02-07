const express = require('express');
const router = express.Router();

const customerController = require('./customerController');
router.get('/src/informe.html', customerController.list)
router.post('/src/IngreAgenda.html/addAgenda', customerController.saveAgenda)
router.post('/src/IngreAgenda.html/updateAgenda/:id', customerController.editAgenda)
router.post('/src/IngreAgenda.html/updateAgenda/:id', customerController.updateAgenda)
router.post('/src/IngreAgenda.html/deleteAgenda/:id', customerController.deleteAgenda)

module.exports = router;