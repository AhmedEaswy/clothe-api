import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";

export default class Color extends Model {
  declare name: string;
  declare value: string;
}

Color.init({
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  value: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
}, { sequelize });
