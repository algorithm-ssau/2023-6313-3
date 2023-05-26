const db = require("../models");

async function existRow(userId, carId) {
    let result = await db.favorites.findOne({
        where: {
          carId : carId,
          userId : userId
        }
    });

    return result;
}

module.exports = { existRow };