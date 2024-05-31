import express from 'express';
import { addTocart, removefromCart, getCart } from '../controllers/Cartcontroller.js';
import authMiddleware from '../middleware/auth.js';
const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addTocart);
cartRouter.post("/remove",  authMiddleware,removefromCart);
cartRouter.post("/get",  authMiddleware,getCart);

export default cartRouter;
