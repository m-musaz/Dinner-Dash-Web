import express from "express";
import mongoose from "mongoose";
import itemModel from "../models/Items.js";

const mongo = mongoose;
const itemsRouter = express.Router();

itemsRouter.get("/get-all", (req, res) => {
  itemModel
    .find({})
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404);
    });
});
itemsRouter.get("/get-latest", (req, res) => {
  itemModel
    .find({})
    .sort({ _id: -1 })
    .limit(10)
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404);
    });
});
itemsRouter.get("/get-by-id", (req, res) => {
  const id = req.query.id;
  itemModel
    .find({ _id: { $all: id } })
    .populate("categories", "name")
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404);
    });
});

itemsRouter.get("/category-items", (req, res) => {
  const reqCategories = req.query.catIDs;
  itemModel
    .find({ categories: { $all: reqCategories } })
    .select({ __v: 0 })
    .then((result) => {
      res.status(201).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

export default itemsRouter;
