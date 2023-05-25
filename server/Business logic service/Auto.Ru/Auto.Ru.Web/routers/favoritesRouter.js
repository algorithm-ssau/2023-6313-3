const express = require("express");
const db = require("../models");
const router = express.Router();
const { existRow } = require("../extensions/row-finder");
const { parseJwt } = require("../extensions/parser-jwt");
const filterExceptions = require("../extensions/exceptions").filterExceptions;

// SET favorites
router.post("/add", filterExceptions(async function (req, res) {
    var obj = parseJwt(req.cookies.accessToken);
    
    const userId = obj.user_id;
    const carId = req.body.carId;

    if (isNaN(carId)) {
        res.status(400).send({
            message: "id должен быть числом",
          });
    }

    const result = await existRow(userId, carId);

    if (!result) {
        try {
            await db.favorites.create({
                carId,
                userId
            });
        } catch (err) {
            res.status(400).send({
                message: "Некорректен id автомобиля и/или пользователя",
            });
        }        
        res.json({ success : true });
    } 
    else {
        res.status(400).send({
            message: "Уже в избранном!",
        });
    }
}));

// GET favorites
router.get("/", filterExceptions(async function (req, res) {
    var obj = parseJwt(req.cookies.accessToken);

    const userId = obj.user_id;

    db.cars.hasMany(db.favorites);
    db.favorites.belongsTo(db.cars, {foreignKey: 'id'});

    var favoritesCars = await db.cars.findAll({
        attributes: ['id', 'name', 'imageUrl', 'price'],
        include: { 
            model: db.favorites,
            where: { userId : userId },
            attributes : { exclude: ["id", "carId", "userId"] }
        }
    });
    
    if (!favoritesCars.length) {
        res.status(404).send({
          message: "Нет избранных автомобилей для текущего пользователя",
        });
    }

    res.json({ items: favoritesCars});
}));

// DELETE favorites
router.post("/drop", filterExceptions(async function (req, res) {
    var obj = parseJwt(req.cookies.accessToken);
    
    const userId = obj.user_id;
    const carId = req.body.carId;

    if (isNaN(carId)) {
        res.status(400).send({
            message: "id должен быть числом",
          });
    }

    const result = await existRow(userId, carId);

    if (result) {
        try {
            await db.favorites.destroy({
                where: {
                    carId: carId,
                    userId: userId
                }
            });
        } catch (err) {
            res.status(400).send({
                message: "Некорректен id автомобиля и/или пользователя",
            });
        }        
        res.json({ success : true });
    } 
    else {
        res.status(404).send({
            message: "Отсутствует в избранном!",
        });
    }
    
}));

module.exports = router;