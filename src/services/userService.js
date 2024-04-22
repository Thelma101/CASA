// services/cifService.js
const customers = []; // Mock database for storing CIFs
let customerIdCounter = 1; // Counter to generate unique IDs

exports.createCustomer = async (customerData) => {
    const {
        date,
        biometricId,
        title,
        firstName,
        fullName,
        lastName,
        DOB,
        email,
        phoneNumber,
        gender,
        maritalStatus,
        countryOfResidence,
        address,
        occupation,
    } = customerData;

    // Basic validation to ensure necessary data is present
    if (!firstName || !lastName || !DOB || !email) {
        throw new Error("Missing required fields");
    }

    // Create the new customer CIF
    const newCustomer = {
        id: customerIdCounter++,
        date,
        biometricId,
        title,
        firstName,
        fullName,
        lastName,
        DOB,
        email,
        phoneNumber,
        gender,
        maritalStatus,
        countryOfResidence,
        address,
        occupation,
    };

    // Store the new CIF in the mock database
    customers.push(newCustomer);

    return newCustomer;
};
