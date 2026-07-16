const { DataTypes } = require("sequelize");

const sequelize = require("../config/connection");


const User = sequelize.define("User", {


    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },


    name: {
        type: DataTypes.STRING,
        allowNull: false
    },


    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },


    password: {
        type: DataTypes.STRING,
        allowNull: false
    },


    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },


    role: {
        type: DataTypes.ENUM(
            "user",
            "admin"
        ),
        defaultValue: "user"
    },


    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }


},
    {
        tableName: "users",
        timestamps: true
    });


module.exports = User;