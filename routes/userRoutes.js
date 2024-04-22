const express = require('express');
const app = express.Router();
const userController = require('../controllers/userController');

app.post('/createSBA', userController.createCustomer);
app.post('/createCAA', userController.createCustomer);

app.get('/:id', userController.getAllCustomers);

app.get('/:id', userController.getCustomerById);

app.put('/:id', userController.updateCustomer);

app.delete('/:id', userController.deleteCustomer);
