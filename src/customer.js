const express = require('express');
const router = express.Router();

const customerController = require('./customerController');
router.get('/', customerController.list)
router.post('/src/IngreAgenda.html/addAgenda', customerController.saveAgenda)
router.post('/deleteAgenda/:id', customerController.deleteAgenda)
router.post('/updateAgenda/:id', customerController.editAgenda)
router.post('/updateAgenda/:id', customerController.updateAgenda)


module.exports = router;