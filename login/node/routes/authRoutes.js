import express from 'express'
import { getAllUsers, login, register } from '../controllers/AuthController.js';


const authRouter = express.Router();

authRouter.post('/register', register); // route to register new user
authRouter.post('/login', login);// route to log an user
authRouter.get('/getAllUsers', getAllUsers); // route to get all users

export default authRouter;