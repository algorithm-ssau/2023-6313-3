const express = require("express");
const cors = require("cors");
const app = express();
const port = 1000;

module.exports.env = app.get("env");

const cars = require("./routers/carsRouter");

app.use((err, req, res, next) => {
  if (! err) {
      return next();
  }

  res.status(500);
  res.send('500: Internal server error');
});

app.use(cors());

app.use(express.json());
app.use("/api/cars", cars);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
