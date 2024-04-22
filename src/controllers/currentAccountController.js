const currentAccountService = require('../services/currentAccountService');
const currentAccountRoutes = require('../routes/currentAccountRoutes');


export.createCurrentAccount = async (req, res) => {

    const { cifId,bvn,firstName, middleName, lastName, DOB, email, phoneNumber, gender } = req.body;
    const currentAccount = await currentAccountService.createCurrentAccount({ cifId,bvn,firstName, middleName, lastName, DOB, email, phoneNumber, gender });

    const { body } = req;
    const currentAccount = await currentAccountService.createCurrentAccount(body);
    res.status(201).json(currentAccount);
}