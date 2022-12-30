const { Router } = require('express');
const ordersController = require('../controllers/orders.controller');

const ordersRouter = Router();

ordersRouter.get('/orders', ordersController.getAll);

module.exports = ordersRouter;
