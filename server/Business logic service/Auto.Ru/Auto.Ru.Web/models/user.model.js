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

<<<<<<< HEAD
    const Role = require('./user.role')
    User.associate = (models) => {
        User.hasOne(models.role);
        models.role.belongsTo(User)
    };

=======
>>>>>>> 1babd244a7815d7467dbab4bdc73a54423ea047e
    return User;
};