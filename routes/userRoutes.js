const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createSBA', userController.createCustomer);
router.post('/createCAA', userController.createCustomer);

router.get('/:id', userController.getAllCustomers);

router.get('/:id', userController.getCustomerById);

router.put('/:id', userController.updateCustomer);

router.delete('/:id', userController.deleteCustomer);
