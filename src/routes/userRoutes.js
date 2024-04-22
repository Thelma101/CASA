const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createCustomer);

router.get('/', userController.getAllCustomers);

router.get('/:id', userController.getCustomerById);

router.put('/:id', userController.updateCustomer);

router.delete('/:id', userController.deleteCustomer);
