const {
  Orders, Cnpjs, Users, Buyers, Providers,
} = require('../database/models');

const getAll = async () => {
  const result = await Orders.findAll({
    include: [
      { model: Cnpjs, as: 'cnpjs' },
      { model: Users, as: 'users' },
      { model: Buyers, as: 'buyers' },
      { model: Providers, as: 'providers' },
    ],
  });
  return result;
};

module.exports = { getAll };
