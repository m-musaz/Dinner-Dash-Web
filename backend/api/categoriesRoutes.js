import express from "express";
import mongoose from "mongoose";
import categoriesModel from "../models/Categories.js";

const categoriesRouter = express.Router();

const mongo = mongoose;

categoriesRouter.get("/get-all", (req, res) => {
  categoriesModel
    .find({})
    .select({ name: 1 })
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404);
    });
});

categoriesRouter.get("/get-by-id", (req, res) => {
  const id = req.query.id;
  categoriesModel
    .find({ _id: { $all: id } })
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404);
    });
});

export default categoriesRouter;
