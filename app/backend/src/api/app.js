require('express-async-errors');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ordersRouter = require('../routes/orders.routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use(ordersRouter);

module.exports = app;
