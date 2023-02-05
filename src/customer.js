const express = require('express');
const router = express.Router();

const customerController = require('./customerController');
router.get('/', customerController.list)








module.exports = router;