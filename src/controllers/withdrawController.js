// const { v4: uuidv4 } = require('uuid'); // Library for generating unique transaction IDs
const crypto = require('crypto');

exports.withdrawal = (req, res) => {
    try {
        const accountId = req.params.id;
        const { amount } = req.body;

        // Validate withdrawal amount
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: "Invalid withdrawal amount" });
        }

        // Find the account by ID
        const account = customerAccounts.find(a => a.id === accountId);

        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

        // Check for sufficient balance
        if (account.balance < amount) {
            return res.status(400).json({ message: "Insufficient balance" });
        }

        // Deduct the withdrawal amount from the account balance
        account.balance -= amount;

        // Generate a unique transaction ID for this withdrawal
        const transactionId = uuidv4(); // Using UUID to generate a unique ID

        // Respond with the unique transaction ID and success message
        return res.status(200).json({
            message: "Withdrawal successful. Thank you for banking with us.",
            transactionId: transactionId,
            balance: account.balance,
            withdrawn: amount
        });
    } catch (error) {
        // Generic error response with unique error ID
        return res.status(500).json({
            message: "An error occurred during withdrawal. Please try again later.",
            error: error.message
        });
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