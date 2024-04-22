const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const casaRoutes = require('./routes/casaRoutes');

app.use(express.json());

app.use('/cif', userRoutes);
app.use('/createCasaAccount', casaRoutes);

// Starting the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
