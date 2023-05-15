module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull : false
        },
        login: {
            type: Sequelize.STRING,
            allowNull : false
        },
        password_hash: {
            type: Sequelize.STRING,
            allowNull : false
        }
    });

    return User;
};