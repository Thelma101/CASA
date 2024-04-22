const express = require('express');
const app = express.Router();
const casaController = require('../controllers/casaController');

app.use(express.json());

app.post('/create', casaController.createCasaAccount);

module.exports = app;