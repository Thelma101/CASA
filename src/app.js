const express = require('express');
// const app = express();
const app = express.Router();

const userRoutes = require('./routes/userRoutes');
const currentAccountRoutes = require('./routes/currentAccountRoutes');
const savingsAccountsRoutes = require('./routes/savingsAccountsRoutes');


app.use(express.json());

app.use('/cif', userRoutes);
app.use('/createCAA', currentAccountRoutes);
app.use('/createSBA', savingsAccountsRoutes);

// Starting the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
