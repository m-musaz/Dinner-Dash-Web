import express from "express";
import mongoose from "mongoose";
import categoriesModel from "../models/Categories.js";

const categoriesRouter = express.Router();

const mongo = mongoose;
mongo
  .connect("mongodb://127.0.0.1:27017/dinnerDash")
  .then(() => {
    console.log("Connected to DB Categories");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

categoriesRouter.get("/get-all", (req, res) => {
  categoriesModel
    .find({})
    .select({ name: 1 })
    .then((result) => {
      console.log(result);
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    });
});

export default categoriesRouter;
