import express from 'express';
import { Loginuser, registeruser } from '../controllers/Usercontroller.js';

const userRouter = express.Router();

userRouter.post('/register', registeruser);
userRouter.post('/login', Loginuser);

export default userRouter;
