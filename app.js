const express = require('express');
// import express from 'express';

const app = express();
// const app = express.Router();

const userRoutes = require('./routes/userRoutes');
const currentAccountRoutes = require('../routes/currentAccountRoutes');
const savingsAccountsRoutes = require('../routes/savingsAccountsRoutes');


app.use(express.json());

app.use('/cif', userRoutes);
app.use('/createCAA', currentAccountRoutes);
app.use('/createSBA', savingsAccountsRoutes);

module.exports = app;