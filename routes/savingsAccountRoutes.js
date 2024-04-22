const express = require('express');
const app = express.Router();
const savingsAccountController = require('../controllers/savingsAccountController');

app.post('/create', savingsAccountController.createSavingsAccount);
app.get('/:id', savingsAccountController.getSavingsAccountById);
app.post('/deposit/:id', savingsAccountController.depositIntoSavings);
app.post('/withdraw/:id', savingsAccountController.withdrawFromSavings);
app.delete('/delete/:id', savingsAccountController.deleteSavingsAccount);

module.export = app;