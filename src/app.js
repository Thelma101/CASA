const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

app.use(express.json());
