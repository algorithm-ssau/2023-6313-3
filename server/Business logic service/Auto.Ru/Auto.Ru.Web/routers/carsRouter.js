const express = require("express");
const db = require("../models");
const router = express.Router();
const paginationExtensions = require("../extensions/pagination");

// Home page route.
router.get("/", async function (req, res) {
  const pagination = paginationExtensions.paginate(req);
  const {Op} = require('sequelize');

  let whereCondition = {};

  if(req.query.searchPattern){
    let searchPattern = String(req.query.searchPattern);
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
});

router.get("/:id", async function (req, res) {
  if (isNaN(req.params.id)) {
    res.status(400).send({
      message: "id должен быть числом",
    });
  }

  let car = await db.cars.findByPk(Number(req.params.id));
  res.json(car);
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const { name, price, imageUrl } = req.body;
  if (!(name && price && imageUrl)) {
    return res.status(400).send({
      message: "Invalid input",
    });
  }
  let car = await db.cars.create({
    name,
    price,
    imageUrl,
  });
  res.json(car);
});

module.exports = router;
