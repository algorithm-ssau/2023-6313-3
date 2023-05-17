const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

module.exports.env = app.get("env");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

const cars = require("./routers/carsRouter");

app.use(cors());

app.use(express.json());
app.use("/api/cars", cars);
