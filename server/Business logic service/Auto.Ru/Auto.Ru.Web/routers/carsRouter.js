const express = require("express");
const db = require("../models");
const router = express.Router();
const paginationExtensions = require("../extensions/pagination");

// Home page route.
router.get("/", async function (req, res) {
  const pagination = paginationExtensions.paginate(req);

  let cars = await db.cars.findAndCountAll({
    limit: pagination.size,
    offset: pagination.offset,
  });

  res.json(paginationExtensions.generatePaginationResponse(cars, pagination));
});

router.get("/:id/details", async function (req, res) {
  if (isNaN(req.params.id)) {
    res.status(400).send({
      message: "id должен быть числом",
    });
  }

  let car = await db.cars.findOne({
    where: {
      id : Number(req.params.id)
    },
    attributes: { exclude: ['createdAt', 'updatedAt'] }
});

  if (!car) {
    res.status(404).send({
      message: "Такого id не существует",
    });
  }
  
  res.json(car);
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const { name, price, imageUrl, year, mileage, color, engineValue, enginePowers, leftSteeringWheel, transmission, gear } = req.body;
  if (!(name && price && imageUrl && year && mileage && color && engineValue && enginePowers && leftSteeringWheel && transmission && gear)) {
    return res.status(400).send({
      message: "Невалидные данные",
    });
  }
  var currentTime = new Date();
  let car = await db.cars.create({
    name,
    price,
    imageUrl,
    year,
    mileage,
    color,
    engineValue,
    enginePowers,
    leftSteeringWheel,
    transmission,
    gear,
    currentTime,
    currentTime,
  });
  res.json(car);
});

module.exports = router;
