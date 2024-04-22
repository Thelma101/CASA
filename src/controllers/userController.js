// const cifService = require('../services/cifService');

// // Controller function to create a new CIF
// exports.createCustomer = async (req, res) => {
//     try {
//         const { name, email, address } = req.body;
//         const customer = await cifService.createCustomer(name, email, address);
//         res.status(201).json(customer);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Controller function to get CIF details by ID
// exports.getCustomer = async (req, res) => {
//     try {
//         const customerId = req.params.customerId;
//         const customer = await cifService.getCustomerById(customerId);
//         if (!customer) {
//             return res.status(404).json({ message: 'Customer not found' });
//         }
//         res.json(customer);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// controllers/cifController.js

const cifService = require('../services/cifService');

// Controller function to create a new CIF
exports.createCustomer = async (req, res) => {
    try {
        const {
            date,
            biometricId,
            title,
            firstName,
            middleName,
            lastName,
            DOB,
            email,
            phoneNumber,
            address,
            occupation,
            gender,
            maritalStatus,
            countryOfResidence,
        } = req.body;

        // Concatenate full name if middleName is present
        const fullName = middleName
            ? `${firstName} ${middleName} ${lastName}`
            : `${firstName} ${lastName}`;

        const customer = await cifService.createCustomer({
            date,
            biometricId,
            title,
            firstName,
            middleName,
            lastName,
            DOB,
            email,
            phoneNumber,
            address,
            occupation,
            gender,
            maritalStatus,
            countryOfResidence,
        });

        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
