const customerAccounts = []; // Mock database for current accounts

// Withdraw from customer Account
exports.withdrawal = (req, res) => {
    try {
        const accountId = req.params.id;
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).send({ message: "Invalid withdrawal amount" });
        }

        // Find the account number by ID
        const account = currentAccounts.find(a => a.id === accountId);

        if (!account) {
            return res.status(404).send({ message: " Account number not found" });
        }

        if (account.balance < amount) {
            return res.status(400).send({ message: "Insufficient balance" });
        }

        // Deduct the amount from the account balance
        account.balance -= amount;

        res.send({
            message: "Withdrawal successful. Thank you for banking with us",
            balance: account.balance,
            withdrawn: amount
        });
    } catch (error) {
        res.status(500).send({ message: "An error occurred, could not withdraw", error: error.message });
    }
};


// const currentAccountController = require('./currentAccountController');
// const currentAccountService = require('../services/currentAccountService');

// exports.withdraw = async (req, res) => {
//     try {
//         const { Id } = req.params;
//         const { amount } = req.body;


//         const currentAccount = await currentAccountService.getCurrentAccountById(accountId);
//         const currentBalance = currentAccount.balance;

//         if (currentBalance < amount) {
//             return res.status(400).json({ error: 'Insufficient balance' });
//         } else if (amount <= 0) {
//             return res.status(400).json({ error: 'Invalid amount' });
//         }

//         updatedAmount = await currentAccountService.withdraw(Id, amount);
//         res.body({ message: 'Transaction successful', updatedAmount })
//     }
//     catch (error) {
//         return res.status(500).json({ error: 'Could not post transaction', message: error.message });
//     }
// };