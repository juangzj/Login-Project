import bd from '../database/bd.js'//database import
import { DataTypes } from 'sequelize' //dataTypes import
import bcrypt from 'bcrypt'// bcrypt import


const UserModel = bd.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
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
  }
});

// hook to password hash before create a new user
UserModel.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

})

//User model export
export default UserModel
