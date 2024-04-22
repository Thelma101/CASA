const currentAccountService = require('../services/currentAccountService');
const currentAccountRoutes = require('../routes/currentAccountRoutes');


export.createCurrentAccount = async (req, res) => {
    const { body } = req;
    const currentAccount = await currentAccountService.createCurrentAccount(body);
    res.status(201).json(currentAccount);
}