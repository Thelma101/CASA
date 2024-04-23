const express = require('express');
const router = express.Router();

const { createCurrentAccount } = require('../controllers/currentAccountController');

router.post('/createCAA', createCurrentAccount);

module.exports = router;

