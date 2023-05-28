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
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING,
            allowNull : false
        },
        mileage: {
            type: Sequelize.STRING,
            allowNull : false
        },
        color: {
            type: Sequelize.STRING,
            allowNull : false
        },
        engineValue: {
            type: Sequelize.STRING,
            allowNull : false
        },
        enginePowers: {
            type: Sequelize.STRING,
            allowNull : false
        },
        leftSteeringWheel: {
            type: Sequelize.BOOLEAN,
            allowNull : false,
            default: true
        },
        transmission: {
            type: Sequelize.STRING,
            allowNull : false
        },
        gear: {
            type: Sequelize.STRING,
            allowNull : false
        }
    });

    return Car;
};