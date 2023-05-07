const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports.env = app.get('env');

const config = require('./config/config.json').development

const Sequelize = require('sequelize');

  const sequelize = new Sequelize('Auto.Ru', 'auto-ru-client', '12345', {
    host: config.host,
    dialect: "mssql",
    dialectOptions: {
        options: {
          trustServerCertificate: true
        }, 
      }
  });

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})