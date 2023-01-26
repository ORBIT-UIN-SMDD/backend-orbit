const { DataTypes } = require('sequelize');
const db = require("../database/mysql");

const User = db.define('anggota', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    freezeTableName: false,
    createdAt : false
});

// console.log(User === db.models.User); // true

module.exports = User