const express = require('express');
const app = express.Router();
const savingsAccountController = require('../controllers/savingsAccountController');

const app.post('/create', savingsAccountController.createSavingsAccount);

module export = app;