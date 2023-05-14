const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports.env = app.get('env');

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

const cars = require("./routers/carsRouter");

app.use("/cars", cars)

async function dbSync(sequelize){
  await sequelize.sync({force: true});
}