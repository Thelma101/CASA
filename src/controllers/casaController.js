// controllers/casaController.js
const casaService = require('../services/casaService');
const cifService = require('../services/cifService');

exports.createCASAAccount = async (req, res) => {
    try {
        const { cifId, accountType, initialBalance } = req.body;

        // Validate the CIF exists
        const customer = await cifService.getCustomerById(cifId);
        if (!customer) {
            return res.status(404).json({ message: "CIF not found" });
        }

        // Create the CASA account through the service
        const newCASAAccount = await casaService.createCASAAccount({
            cifId,
            accountType,
            initialBalance,
        });

        res.status(201).json(newCASAAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCASAAccountById = async (req, res) => {
    try {
        const { id } = req.params;

        // Retrieve the CASA account by its unique ID
        const casaAccount = await casaService.getCASAAccountById(id);
        if (!casaAccount) {
            return res.status(404).json({ message: "CASA account not found" });
        }

        res.status(200).json(casaAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.depositIntoCASA = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount } = req.body;

        // Ensure the amount is valid
        if (amount <= 0) {
            return res.status(400).json({ message: "Invalid deposit amount" });
        }

        // Perform the deposit through the service
        const updatedAccount = await casaService.depositIntoCASA(id, amount);

        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.withdrawFromCASA = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount } = req.body;

        // Ensure the amount is valid
        if (amount <= 0) {
            return res.status(400).json({ message: "Invalid withdrawal amount" });
        }

        // Perform the withdrawal through the service
        const updatedAccount = await casaService.withdrawFromCASA(id, amount);

        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCASAAccount = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the CASA account through the service
        const result = await casaService.deleteCASAAccount(id);

        res.status(200).json({ message: "CASA account deleted", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
