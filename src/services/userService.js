const customerId = []; 
let cif = 100; 


function generateUniqueId() {
    let id = customerIdCounter;
    customerIdCounter++;
    return id.toString();
  }
  

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
    if (!firstName || !lastName || !biometricId || !DOB || !phoneNumber) {
        throw new Error("Missing required fields");
    }

    // Create the new customer CIF
    const newCustomer = {
        id: cif++,
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
