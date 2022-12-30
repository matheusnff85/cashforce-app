module.exports = (sequelize, DataTypes) => {
  const Cnpjs = sequelize.define('Cnpjs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      get() {
        return this.getDataValue('createdAt')
          .toLocaleString('en-GB', { timeZone: 'UTC' });
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      get() {
        return this.getDataValue('updatedAt')
          .toLocaleString('en-GB', { timeZone: 'UTC' });
      },
    },
  }, {
    timestamps: true,
    tableName: 'cnpjs',
  });

  return Cnpjs;
};
