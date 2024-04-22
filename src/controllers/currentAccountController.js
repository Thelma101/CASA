const currentAccountService = require('../services/currentAccountService');
const currentAccountRoutes = require('../routes/currentAccountRoutes');


exports.createCurrentAccount = async (req, res) => {

    try {
        const { cifId, bvn, firstName, middleName, lastName, DOB, email, phoneNumber, gender } = req.body;
        const currentAccount = await currentAccountService.createCurrentAccount({ cifId, bvn, firstName, middleName, lastName, DOB, email, phoneNumber, gender });

        // /CIF validation
        const customer = await currentAccountService.getCustomerById(cifId);
        if (!customer) {
            return res.status(400).json({
                message: 'Could not create current account'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }

}