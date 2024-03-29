import express from "express";
import mongoose from "mongoose";
import ordersModel from "../models/Orders.js";
import usersModel from "../models/Users.js";

const mongo = mongoose;
const userRouter = express.Router();

// vew past orders
// save Order
userRouter.post("/save-order", async (req, res, next) => {
  const user_id = req.user._id;
  const order = req.body.order;

  if (!order.length) {
    res.status(500).end("Your Order is Empty");
  } else {
    const db_order = new ordersModel({
      items: order,
    });

    const user = await usersModel.findById(user_id);
    user?.orders.push(db_order?._id);

    try {
      await db_order?.save();
      await user?.save();
      res.status(201).send("Order Saved");
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred");
    }
  }
});

userRouter.get("/get-orders", async (req, res, next) => {
  const user_id = req.user._id;
  const orderIds = await usersModel
    .findById(user_id)
    .select({ _id: 0, orders: 1 });

  const stringifiedOrders = orderIds?.orders.map((item) => item.toString());

  const orders = await ordersModel
    .find({
      _id: { $in: stringifiedOrders },
    })
    .populate({ path: "items.itemId", model: "items" });

  res.json({
    user: req.user,
    orders: orders,
  });
});

export default userRouter;
