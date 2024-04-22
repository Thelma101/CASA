let customerIdCounter = 1; // Define the counter properly
let cifNumber = 100; // Starting point for CIF numbers

// Generate a unique customer ID
function generateUniqueId() {
    let id = customerIdCounter;
    customerIdCounter++; // Increment the counter to ensure uniqueness
    return id.toString(); // Return as a string for consistency
}

exports.createCustomer = async (customerData) => {
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
        gender,
        maritalStatus,
        countryOfResidence,
        address,
        occupation,
    } = customerData;

    // Basic validation to ensure necessary data is present
    if (!firstName || !lastName || !biometricId || !DOB || !phoneNumber) {
        throw new Error("Missing required fields");
    }

    // Create the full name if middleName is optional
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;

    // Create the new customer CIF with a unique ID
    const newCustomer = {
        id: cifNumber++, // Increment the CIF number to ensure unique IDs
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

    return newCustomer; // Return the newly created CIF
};
