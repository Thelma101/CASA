const savingsAccountService = require('../services/savingsAccountService');
const savingsAccountRoutes = require('../routes/savingsAccountRoutes');


exports.createSavingsAccount = async (req, res) => {

    try {
        const { cifId, BVN, firstName, middleName, lastName, DOB, email, phoneNumber, gender } = req.body;

        // /CIF validation
        const customer = await savingsAccountService.getCustomerById(cifId);
        if (!customer) {
            return res.status(400).json({
                message: 'Could not create savings account'
            });
        }
        // Create account
        const savingsAccount = await savingsAccountService.createSavingsAccount({ cifId, BVN, schemeType });
        res.body(savingsAccount);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: (error.message || 'Something went wrong. Try again')
        });
    }

}