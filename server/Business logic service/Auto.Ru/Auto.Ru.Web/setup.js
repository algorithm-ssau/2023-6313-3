const dbConfig = require("./db.config.js");

const Sequelize = require("sequelize");
var config = dbConfig.development;

const sequelize = new Sequelize(config, {
  host: config.host,
  dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;