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
        return res.status(400).send({
            message: "id должен быть числом",
          });
    }

    const result = await existRow(userId, carId);

    if (!result) {
        try {
            await db.favorites.create({
                carId: carId,
                userId: userId
            });
        } catch (err) {
            console.log(err);
             return res.status(400).send({
                message: "Некорректен id автомобиля и/или пользователя",
            });
        }        
        return res.json({ success : true });
    } 
    else {
        return res.status(400).send({
            message: "Уже в избранном!",
        });
    }
}));

// GET favorites
router.get("/", filterExceptions(async function (req, res) {
    var obj = parseJwt(req.cookies.accessToken);

    const userId = obj.user_id;

    var favoritesCars = await db.cars.findAll({
        attributes: ['id', 'name', 'imageUrl', 'price'],
        include: { 
            model: db.favorites,
            where: { userId : userId },
            attributes : { exclude: ["id", "carId", "userId"] }
        }
    });
    
    if (!favoritesCars.length) {
        return res.status(204).send();
    }

    return res.json({ items: favoritesCars});
}));

// DELETE favorites
router.delete("/drop", filterExceptions(async function (req, res) {
    var obj = parseJwt(req.cookies.accessToken);
    
    const userId = obj.user_id;
    const carId = req.body.carId;

    if (isNaN(carId)) {
        return res.status(400).send({
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
            return res.status(400).send({
                message: "Некорректен id автомобиля и/или пользователя",
            });
        }        
        return res.json({ success : true });
    } 
    else {
        return res.status(404).send({
            message: "Отсутствует в избранном!",
        });
    }
    
}));

module.exports = router;