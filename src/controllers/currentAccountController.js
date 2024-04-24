
exports.createCurrentAccount = async (req, res) => {
    try {
        const { cifId, BVN, schemeType } = req.body;

        const customer = await currentAccountService.getCustomerById(cifId);
        if (!customer) {
            return res.status(400).json({
                message: 'Customer not found. Cannot create current account.'
            });
        }

        const currentAccount = await currentAccountService.createCurrentAccount({
            cifId,
            BVN,
            schemeType
        });

        res.status(201).json(currentAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating current account',
            details: error.message
        });
    }
};
