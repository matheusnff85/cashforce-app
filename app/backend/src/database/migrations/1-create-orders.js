module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pdfFile: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CTE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpjId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Cnpjs',
          key: 'id',
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      buyerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Buyers',
          key: 'id',
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Providers',
          key: 'id',
        },
      },
      orderStatusBuyer: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      orderStatusProvider: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('orders');
  },
};
