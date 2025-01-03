import express from 'express'
import { deleteUser, getAllUsers, login, register, updateUser } from '../controllers/AuthController.js';


const authRouter = express.Router();

authRouter.post('/register', register); // route to register new user
authRouter.post('/login', login);// route to log an user
authRouter.get('/getAllUsers', getAllUsers); // route to get all users
authRouter.delete('/deleteUser/:user_id', deleteUser)// route to delete an user
authRouter.put('/updateUser/:user_id', updateUser)// route to update an user 



export default authRouter;