const express = require("express");
const cors = require("cors");
const app = express();
const port = 1000;

module.exports.env = app.get("env");

const cars = require("./routers/carsRouter");

app.use(cors());

app.use(express.json());

app.use("/api/cars", cars);

app.use(function(err, req, res, next){
  console.log(err);
  res.status(500);
  res.send({ message: err.message});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
