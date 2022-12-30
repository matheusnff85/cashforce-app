const ordersServices = require('../services/orders.services');

const getAll = async (_req, res) => {
  const result = await ordersServices.getAll();
  return res.status(200).json(result);
};

module.exports = { getAll };
