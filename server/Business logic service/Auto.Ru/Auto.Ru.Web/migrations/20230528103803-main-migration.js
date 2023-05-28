'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });

    await queryInterface.createTable('cars', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mileage: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      engineValue: {
        type: Sequelize.STRING,
        allowNull: false
      },
      enginePowers: {
        type: Sequelize.STRING,
        allowNull: false
      },
      leftSteeringWheel: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: true
      },
      transmission: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gear: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    await queryInterface.createTable('refresh-tokens', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: 'id'
        }
      }
    },
      {
        timestamps: false
      });
    queryInterface.createTable('favorites', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cars",
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: 'id'
        }
      }
    },
      {
        timestamps: false
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('cars');
    await queryInterface.dropTable('refresh-tokens');
    await queryInterface.dropTable('favorites');
  }
};
