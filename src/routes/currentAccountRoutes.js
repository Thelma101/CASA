const express = require ('express');
const app =  express.Router();
const currentAccountController = require('../controllers/currentAccountController');
const currentAccountService = require('../services/currentAccountService');


app.post('/create', currentAccountController.createCurrentAccount);