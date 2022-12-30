const { Orders } = require('../database/models');

const getAll = async () => {
  const result = await Orders.findAll();
  return result;
};

module.exports = { getAll };
