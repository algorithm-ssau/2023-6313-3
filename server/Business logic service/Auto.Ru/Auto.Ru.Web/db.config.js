module.exports.persistence = { //todo: update
  development: {
    connectionString: "data source=I-NUC-4250;initial catalog=master;trusted_connection=true",
    USER: "auto-ru",
    DB: "Auto.Ru",
    dialect: "sql-server",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};