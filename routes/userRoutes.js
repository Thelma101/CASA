const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const currentAccountController = require('../controllers/currentAccountController');
const savingsAccountController = require('../controllers/savingsAccountController');

router.post('/createCAA', createCurrentAccount);
router.post('/createSBA', createCurrentAccount);

// router.get('/:id', userController.getAllCustomers);

// router.get('/:id', userController.getCustomerById);

// router.put('/:id', userController.updateCustomer);

// router.delete('/:id', userController.deleteCustomer);
