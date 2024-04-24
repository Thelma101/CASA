const express = require('express');
const router = express.Router();

// Import the specific functions from your controllers
const userController = require('../controllers/userController');
const currentAccountController = require('../controllers/currentAccountController'); 
const savingsAccountController = require('../controllers/savingsAccountController'); 

// Define routes with specific function callbacks
router.post('/createCAA', currentAccountController.createCurrentAccount); 
router.post('/createSBA', savingsAccountController.createSavingsAccount); 

// router.get('/:id', userController.getCustomerById); 
// router.put('/:id', userController.updateCustomer);
// router.delete('/:id', userController.deleteCustomer);

module.exports = router;
