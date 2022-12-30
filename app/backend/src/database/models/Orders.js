module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    orderPath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orderFileName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    orderOriginalName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emissionDate: {
      type: DataTypes.STRING,
      allowNull: true,
      get() {
        return new Date(this.getDataValue('emissionDate')).toLocaleDateString();
      },
    },
    pdfFile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emitedTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nNf: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    CTE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    value: {
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    orderStatusBuyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    orderStatusProvider: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    deliveryReceipt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cargoPackingList: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deliveryCtrc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: true,
    tableName: 'orders',
  });

  Orders.associate = (models) => {
    Orders.belongsTo(models.Cnpjs, { foreignKey: 'cnpjId', as: 'cnpjs' });
    Orders.belongsTo(models.Users, { foreignKey: 'userId', as: 'users' });
    Orders.belongsTo(models.Buyers, { foreignKey: 'buyerId', as: 'buyers' });
    Orders.belongsTo(models.Providers, { foreignKey: 'providerId', as: 'providers' });
  };

  return Orders;
};
