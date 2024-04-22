const express = require('express');
const depositService = require('../services/depositService');
const app = express.Router();

exports.deposit = async (req, res) => {
    try {
        const { amount, accountNumber } = req.body;
        const deposit = await depositService.deposit(amount, accountNumber);
        res.json(deposit);

    } catch (error) {
        res.body = ({
            message: error.message
        })
    }

}