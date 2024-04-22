const casaService = require('../services/casaService');
const userService = require('../services/userService');



export createCasaAccount = async (req, res) => {
    try {
        const { userId, ...data } = req.body;
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error creating casa account' });
    }
}
