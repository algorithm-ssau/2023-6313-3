module.exports.persistence = { //todo: update
  development: {
    connectionString: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "testdb",
    dialect: "sql-server",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};