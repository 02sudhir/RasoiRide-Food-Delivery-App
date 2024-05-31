import express from 'express';
import authmiddleWare from '../middleware/auth.js';
import { placeOrder, verfyOrder ,userOrder,listOrders, updateStatus} from '../controllers/ordercontroller.js';


const orderRouter= express.Router();

orderRouter.post("/place",authmiddleWare,placeOrder)
orderRouter.post("/verify",verfyOrder)
orderRouter.post("/usersorder",authmiddleWare,userOrder)
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)
export default orderRouter;

