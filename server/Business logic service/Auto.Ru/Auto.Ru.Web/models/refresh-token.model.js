module.exports = (sequelize, Sequelize) => {
    const Token = sequelize.define("refresh-tokens", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: Sequelize.STRING,
            allowNull : false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        expiresAt:{
            type: Sequelize.DATE,
            allowNull: false
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

    return Token;
};