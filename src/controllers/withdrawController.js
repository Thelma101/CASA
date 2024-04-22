const currentAccountController = require('./currentAccountController');
const currentAccountService = require('../services/currentAccountService');

exports.withdraw = async (req, res) => {
    try {
        const { Id } = req.params;
        const { amount } = req.body;


        const currentAccount = await currentAccountService.getCurrentAccountById(accountId);
        const currentBalance = currentAccount.balance;

        if (currentBalance < amount) {
            return res.status(400).json({ error: 'Insufficient balance' });
        } else if (amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }

        updatedAmount = await currentAccountService.withdraw(Id, amount);
    }
    catch (error) {
        return res.status(500).json({ error: 'Could not post transaction', message: error.message });
    }
    };