const { Orders, Cnpjs, Users } = require('../database/models');

const getAll = async () => {
  const result = await Orders.findAll({
    include: [
      { model: Cnpjs, as: 'cnpjs' },
      { model: Users, as: 'users' },
    ],
  });
  return result;
};

module.exports = { getAll };
