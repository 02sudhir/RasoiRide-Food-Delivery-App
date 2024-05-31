import mongoose from "mongoose";

export const connectDB= async () =>{
    await mongoose.connect('mongodb+srv://sudhiramruskar3:JZBlB825Nbub3Zk7@cluster0.mtkzih2.mongodb.net/food-del').then(()=>console.log('db connected'));
}