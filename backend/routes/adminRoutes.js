import express from "express";
import mongoose from "mongoose";
import ordersModel from "../models/Orders.js";
import usersModel from "../models/Users.js";
import categoriesModel from "../models/Categories.js";
import itemModel from "../models/Items.js";

const mongo = mongoose;
const adminRouter = express.Router();

// create new item
adminRouter.post("/add-item", (req, res, next) => {
  const req_item = req.body.item;
  const item = new itemModel(req_item);
  try {
    item.save();
    res.status(201).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
});

// modify existing item // assign items to categories // retire item (active)
adminRouter.post("/update-item", async (req, res, next) => {
  const req_item = req.body.item;
  const req_item_id = req_item._id;
  try {
    const item = await itemModel.findByIdAndUpdate(req_item_id, req_item);
    res.status(200).send("Updated");
  } catch (error) {
    res.status(500).send("Not Found");
  }
});

// create categories
adminRouter.post("/add-category", (req, res) => {
  const Categories = new categoriesModel({ name: req.body.name });
  Categories.save()
    .then(() => {
      res.status(201).json({ status: "success" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400);
    });
});

// vew all orders of all users
adminRouter.get("/get-all-orders", async (req, res) => {
  const orders = await ordersModel.find({});
  res.status(200).json(orders);
});

//access indvidual order
adminRouter.get("/get-order", async (req, res) => {
  const orderID = req.body.orderID;
  try {
    const order = await ordersModel.findById(orderID);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send("Not Found");
  }
});

// change any order status to something else
adminRouter.post("/order-status-update", async (req, res) => {
  const orderID = req.body.orderID;
  const status = req.body.status;
  try {
    const orders = await ordersModel.findByIdAndUpdate(orderID, {
      _id: orderID,
      status: status,
      statusUpdateTimeStamp: Date.now(),
    });
    res.status(200).send("Updated");
  } catch (error) {
    res.status(500).send("Not Found");
  }
});
// cannot change personal data other than self

export default adminRouter;
