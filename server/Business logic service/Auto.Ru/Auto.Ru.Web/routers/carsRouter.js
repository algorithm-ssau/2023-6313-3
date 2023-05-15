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


module.exports = router;