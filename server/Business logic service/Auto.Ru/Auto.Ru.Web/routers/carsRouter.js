const express = require("express");
const db = require("../models");
const router = express.Router();
const { existRow } = require("../extensions/row-finder");
const { parseJwt } = require("../extensions/parser-jwt");
const paginationExtensions = require("../extensions/pagination");

const filterExceptions = require("../extensions/exceptions").filterExceptions;

// Home page route.
router.get(
  "/",
  filterExceptions(async function (req, res) {
    const pagination = paginationExtensions.paginate(req);
    const { Op } = require("sequelize");

    var obj = parseJwt(req.cookies.accessToken);
    const userId = obj.user_id;

    let whereCondition = {};

    if (req.query.searchPattern) {
      let searchPattern = String(req.query.searchPattern);
      whereCondition = {
        name: {
          [Op.like]: "%" + searchPattern + "%",
        },
      };
    }

    let cars = await db.cars.findAndCountAll({
      limit: pagination.size,
      offset: pagination.offset,
      where: whereCondition,
      attributes: ["id", "name", "imageUrl", "price"],
    });

    let favoriteCars = await db.favorites.findAll({
      where: { userId: userId },
      attributes: ["carId"],
    });

    for (let i = 0; i < cars.count; i++) {
      let resultSearch = true;
      if (favoriteCars.find((o) => o.carId === cars.rows[i].id) === undefined)
        resultSearch = false;
      cars.rows[i].dataValues.inFavorites = resultSearch;
    }

    res.json(paginationExtensions.generatePaginationResponse(cars, pagination));
  })
);

// Get cars' details from database
router.get(
  "/:id/details",
  filterExceptions(async function (req, res) {
    if (isNaN(req.params.id)) {
      res.status(400).send({
        message: "id должен быть числом",
      });
    }

    let car = await db.cars.findOne({
      where: {
        id: Number(req.params.id),
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!car) {
      res.status(404).send({
        message: "Такого id не существует",
      });
    }

    res.json(car);
  })
);

// Set cars' details to database
router.post(
  "/",
  filterExceptions(async function (req, res) {
    console.log(req.body);
    const {
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
    } = req.body;
    if (
      !(
        name &&
        price &&
        imageUrl &&
        year &&
        mileage &&
        color &&
        engineValue &&
        enginePowers &&
        leftSteeringWheel &&
        transmission &&
        gear
      )
    ) {
      return res.status(400).send({
        message: "Невалидные данные",
      });
    }
    var currentTime = new Date();
    await db.cars.create({
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

    res.json({ success: true });
  })
);

module.exports = router;
