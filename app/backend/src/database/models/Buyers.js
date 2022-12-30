module.exports = (sequelize, DataTypes) => {
  const Buyers = sequelize.define('Buyers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tradingName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cashforceTax: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsibleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsibleEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsiblePosition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsiblePhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    responsibleMobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    situation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    situationDate: {
      type: DataTypes.STRING,
      allowNull: true,
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
    cnpjId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    confirm: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: true,
    tableName: 'buyers',
  });

  return Buyers;
};
