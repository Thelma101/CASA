const express = require('express');
const depositService = require('../services/depositService');
const app = express.Router();

exports.deposit = async (req, res) => {
    try {

        const { amount } = req.body;
        const { accountNumber } = req.params;
        const deposit = await depositService.deposit(amount, accountNumber);
        res.body = ({
            message: 'Deposit successful. Thank you for banking with us',
            deposit,
            balance: deposit.balance,
            accountNumber: deposit.accountNumber
        })        
        
        // const { amount, accountNumber } = req.body;
        // const deposit = await depositService.deposit(amount, accountNumber);
        // res.json(deposit);

    } catch (error) {
        res.body = ({
            message: error.message
        })
    }
}
