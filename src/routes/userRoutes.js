const express = require('express');
const router = express.Router();
const cifController = require('../controllers/cifController');

// Define routes for managing CIFs
router.post('/customers', cifController.createCustomer);
router.get('/customers/:customerId', cifController.getCustomer);

module.exports = router;
