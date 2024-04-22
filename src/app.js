
const express = require('express');
const app = express(); // Create the Express app

const userRoutes = require('./routes/userController');
const currentAccountRoutes = require('./routes/currentAccountRoutes');
const savingsAccountsRoutes = require('./routes/savingsAccountsRoutes');

app.use(express.json()); // Apply middleware

app.use('/cif', userRoutes); 
app.use('/createCAA', currentAccountRoutes);
app.use('/createSBA', savingsAccountsRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
