const express = require("express");
const db = require("../models");
const router = express.Router();

// Home page route.
router.get("/", async function (req, res) {
  let cars = await db.cars.findAll();
  console.log(cars);
  res.json(cars);
});


module.exports = router;