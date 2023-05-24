const express = require("express");
const db = require("../models");
const router = express.Router();
const { parseJwt } = require("../extensions/parser-jwt")
const filterExceptions = require("../extensions/exceptions").filterExceptions;

// SET favorites
router.post("/add", filterExceptions(async function (req, res) {
    console.log(req.body, req.cookies.accessToken)
    var obj = JSON.parse(parseJwt(req.cookies.accessToken));
    
    const userId = obj[0].userId;
    const carId = req.body.carId;

    if (isNaN(carId) || isNaN(userId)) {
        res.status(400).send({
            message: "id должен быть числом",
          });
    }

    let existFav = await db.favorites.findOne({
        where: {
          carId : Number(carId),
          userId : Number(userId)
        }
    });

    if (existFav) {
        res.status(400).send({
            message: "Уже в избранном!",
        });
    } 
    else {
        try {
            let favorite = await db.favorites.create({
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
}));

// GET favorites
router.get("/get", filterExceptions(async function (req, res) {
    userId = req.body.userId // UPDATE FROM JWT BOGDAN 

    if (isNaN(userId)) {
        res.status(400).send({
            message: "id должен быть числом",
          });
    }

    let favoritesCars = await db.favorites.findAll({
        where: {
          id : Number(userId)
        },
        attributes: { include: ['carId'] }
    });
    
    if (!favoritesCars) {
        res.status(404).send({
          message: "Нет избранных автомобилей для текущего пользователя",
        });
    }
    
    db.cars.query("SELECT c.name, c.price, c.imageUrl FROM cars c\
    JOIN favorites f ON f.carId = c.id WHERE f.userId = ?", [userId], function(err, results){
        if (err) {
            console.log(err.message);
        }
        res.json(results);
    });



}));

// DELETE favorites
router.post("/drop", filterExceptions(async function (req, res) {
    
}));

module.exports = router;