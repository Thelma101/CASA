const userService = require('../services/userService');

// Create a new CIF
exports.createCustomer = async (req, res) => {
    try {
        const {
            date,
            BVN,
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

        const customerInfo = await userService.createCustomer({
            date,
            BVN,
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

        res.status(201).json(customerInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
