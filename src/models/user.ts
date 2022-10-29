import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db";
import {throws} from "assert";

export interface userData {
  email: string,
  password: string
}

export default class User extends Model {
  declare name: string;
  declare phone: string;
  declare email: string;
  declare password: string;
  declare picture: string;
}

User.init({
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  phone: {
    type: new DataTypes.STRING(128),
    unique: true,
    validate: {
      notEmpty: true,
      isNumeric: true,
    }
  },
  email: {
    type: new DataTypes.STRING(128),
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    }
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  picture: {
    type: new DataTypes.STRING,
    allowNull: true,
  },
},
    {
      getterMethods: {

        auth(userData: userData): void {
          try {
            const user = User.findOne({
              where: {
                email: userData.email
              }
            })
            console.log(user)
          } catch (e) {
            console.log(e)
          }
        }

      },
      sequelize
    },
    );

