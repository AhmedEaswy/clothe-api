import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";
import User from './user'

export default class Address extends Model {
  declare name: string;
  declare phone: string;
  declare email: string;
  declare password: string;
}

Address.init({
  phone: {
    type: new DataTypes.STRING(20),
    unique: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    }
  },
  notes: {
    type: new DataTypes.STRING,
    unique: false,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  address: {
    type: new DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  userId: {
    type: new DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // 'Actors' would also work
      key: 'id',
    },
  },
}, { sequelize, tableName: 'Addresses' });

User.hasMany(Address, {
  foreignKey: 'userId'
});
