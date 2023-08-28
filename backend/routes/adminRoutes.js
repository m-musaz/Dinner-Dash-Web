import express from "express";
import mongoose from "mongoose";
import ordersModel from "../models/Orders.js";
import usersModel from "../models/Users.js";
import itemModel from "../models/Items.js";

const mongo = mongoose;
const adminRouter = express.Router();

mongo
  .connect("mongodb://127.0.0.1:27017/dinnerDash")
  .then(() => {
    console.log("Connected to DB Item");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

// create new item
adminRouter.post("/create-item", (req, res, next) => {
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
adminRouter.post("/modify-item", async (req, res, next) => {
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

// vew all orders of all users
// change any order status to something else
// cannot change personal data other than self

export default adminRouter;
