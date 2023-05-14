const express = require('express')
const app = express()
const port = 3000

module.exports.env = app.get('env');

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

const cars = require("./routers/carsRouter");

app.use("/api/cars", cars)