const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports.env = app.get('env');

const config = require('./config/config.json')

const Sequelize = require('sequelize');

  const sequelize = new Sequelize(
    config.development.database, 
    config.development.username,
    config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect
  });


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
  
// create the modal instance 
db.users = require('./models/user.model')(sequelize, Sequelize);
db.cars = require('./models/car.model')(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

console.log("Db sync...")
  dbSync(sequelize)
  .then(() => {
    console.log("All models were synchronized successfully.")
  })
  .catch((err) => {
    console.error('Error:', err);
  });

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

async function dbSync(sequelize){
  await sequelize.sync({force: true});
}