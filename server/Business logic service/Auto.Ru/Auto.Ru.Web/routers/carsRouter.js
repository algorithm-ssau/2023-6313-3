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

  await db.cars.findOne({
    where: {
      id : Number(req.params.id)
    },
    attributes: { exclude: ['createdAt', 'updatedAt'] }
}).then(function(car) {
    res.json(car);
})
});

router.post("/", async function (req, res) {
  console.log(req.body);
  const { name, price, imageUrl } = req.body;
  if (!(name && price && imageUrl)) {
    return res.status(400).send({
      message: "невалидные данные",
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
