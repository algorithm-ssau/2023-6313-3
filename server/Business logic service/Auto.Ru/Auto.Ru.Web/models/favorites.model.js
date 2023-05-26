module.exports = (sequelize, Sequelize) => {
    const Favorites = sequelize.define("favorites", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "cars",
                key: 'id'
            }
        },
        userId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: 'id'
            }
        }
    },
    {
        timestamps: false
    });

    return Favorites;
};