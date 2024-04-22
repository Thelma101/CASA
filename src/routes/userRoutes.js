const express = require('express');
const app = express.Router();
const userController = require('../controllers/userController');

app.post('/create', userController.createCustomer);

app.get('/', userController.getAllCustomers);

app.get('/:id', userController.getCustomerById);

app.put('/:id', userController.updateCustomer);

app.delete('/:id', userController.deleteCustomer);
