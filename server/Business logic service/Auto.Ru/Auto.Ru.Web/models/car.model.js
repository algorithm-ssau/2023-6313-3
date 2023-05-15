module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("cars", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull : false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull : false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull : false
        }
    });

    return Car;
};