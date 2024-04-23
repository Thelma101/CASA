const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const currentAccountController = require('../controllers/currentAccountController');
const savingAccountController = require('../controllers/savingAccountController');

router.post('/createSBA', savingAccountController);
router.post('/createCAA', savingAccountController);

// router.get('/:id', userController.getAllCustomers);

// router.get('/:id', userController.getCustomerById);

// router.put('/:id', userController.updateCustomer);

// router.delete('/:id', userController.deleteCustomer);
