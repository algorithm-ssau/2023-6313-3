const express = require("express");
const db = require("../models");
const router = express.Router();
const paginationExtensions = require("../extensions/pagination");

const use = fn => (req,res,next) => Promise.resolve(fn(req,res,next)).catch(next);

// Home page route.
router.get("/", use(async function (req, res) {
  const pagination = paginationExtensions.paginate(req);
  const {Op} = require('sequelize');

  let whereCondition = {};

  if(req.query.searchPattern){
    let searchPattern = String(req.query.searchPattern)
    whereCondition = {
      name: {
        [Op.like]: '%' + searchPattern + '%'
      }
    };
  }

  let cars = await db.cars.findAndCountAll({
    limit: pagination.size,
    offset: pagination.offset,
    where: whereCondition,
  });

  res.json(paginationExtensions.generatePaginationResponse(cars, pagination));
}));

// Get cars' details from database
router.get("/:id/details", use(async function (req, res) {
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
}));

// Set cars' details to database
router.post("/",use(async function (req, res) {
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

  res.json({ "success" : true });

}));

module.exports = router;
