const dbConfig = require("./db.config.js");

const Sequelize = require("sequelize");
var config = dbConfig.development;

const sequelize = new Sequelize('Auto.Ru', 'auto-ru-client', '12345', {
  host: config.host,
  dialect: "mssql",
  dialectOptions: {
      options: {
        trustServerCertificate: true
      }, 
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;