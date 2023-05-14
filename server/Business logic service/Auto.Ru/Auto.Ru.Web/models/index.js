'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, 
    config.username,
    config.password, {
    host: config.host,
    dialect: config.dialect
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
  
// create the modal instance 
db.users = require('./user.model')(sequelize, Sequelize);
db.cars = require('./car.model')(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

console.log("Db sync...")
  sequelize.sync({force: true})
  .then(() => {
    console.log("All models were synchronized successfully.")
  })
  .catch((err) => {
    console.error('Error:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
