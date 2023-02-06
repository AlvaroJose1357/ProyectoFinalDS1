const express = require('express');
const router = express.Router();

const customerController = require('./customerController');
router.get('/', customerController.list)
router.post('/add', customerController.save)
router.post('/delete', customerController.delete)


module.exports = router;