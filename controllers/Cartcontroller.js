import userModel from "../models/userModel.js";

// Add items to user cart
const addTocart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartdata = await userData.cartdata;
    if (!cartdata[req.body.itemId]) {
      cartdata[req.body.itemId] = 1;
    } else {
      cartdata[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartdata });
    res.json({ success: true, message: "added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Remove items from user cart
const removefromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartdata = await userData.cartdata;
    if(cartdata[req.body.itemId]>0){
        cartdata[req.body.itemId] -=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartdata});
    res.json({succes:true,message:"reomved from cart"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId)
    let cartdata = await userData.cartdata;
    res.json({success:true,cartdata})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
};

export { addTocart, removefromCart, getCart };
