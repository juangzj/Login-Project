import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * Method to register a new user
 */
export const register = async (req, res) => {
  const { name, last_name, email, password } = req.body;

  // Basic validations
  if (!name || !last_name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already in use." }); // 409 Conflict
    }

    // Create the new user
    const newUser = await UserModel.create({ name, last_name, email, password });

    // Exclude the password from the response object
    const { password: _, ...userWithoutPassword } = newUser.toJSON();

    res.status(201).json({ message: "User registered successfully", user: userWithoutPassword });
  } catch (error) {
    console.error(error); // Log for debugging
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

/**
 * Method to verify login credentials
 * @param {*} req 
 * @param {*} res 
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Basic validations
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    // Find the user by email
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // Generate the JWT token
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables.");
    }

    const token = jwt.sign(
      { id: user.user_id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRES || "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error); // Log for debugging
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
