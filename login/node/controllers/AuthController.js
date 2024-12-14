import UserModel from "../models/User"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


/**
 * Method to register user
 */
export const register = async (req, res) => {

  const { name, last_name, email, password } = req.body

  try {
    const newUser = await UserModel.create({ name, last_name, password });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creatin user', error });
  }
}

/**
 * Method to verify login credencials
 * @param {*} req 
 * @param {*} res 
 */
export const login = async (req, res) => {

  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ where: { email } }); // find user email

    if (!user) {// when the user can not be found 
      return res.status(404).json({ message: 'User not found' });
    }

    const isMath = await bcrypt.compare(password, user.password)

    if (!isMath) {
      return res.status(401).json({ message: "Incorrect passwrod " })
    }

    const token = jwt.sign({ id: user.user_id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES, })

    res.status(200).json({ message: 'login successful', token })
  } catch (error) {
    res.status(500).json({ message: 'error logging in', error })
  }

}