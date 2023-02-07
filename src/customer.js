const express = require('express');
const router = express.Router();

const customerController = require('./customerController');
//router.get('/', customerController.list)
router.post('/addAgena', customerController.saveAgenda)
router.post('/deleteAgenda/:id', customerController.deleteAgenda)
router.post('/updateAgenda/:id', customerController.updateAgenda)


module.exports = router;