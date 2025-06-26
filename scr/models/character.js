import DataTypes from 'sequelize';
import {sequelize} from "../config/database.js";

const character = sequelize.define("Character",{
    id: {primaryKey: true, type: DataTypes.INTEGER, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING(100), allowNull: false },
    ki: {type: DataTypes.INTEGER, allowNull: false },
    race: {type: DataTypes.STRING(100), allowNull: false },
    gender: {type: DataTypes.STRING(100), allowNull: false },
    description:{type: DataTypes.STRING(250)}
});

export default character;