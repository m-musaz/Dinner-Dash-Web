import mongoose from "mongoose";
const mongo = mongoose;
import categoriesModel from "../models/Categories.js";
import itemModel from "../models/Items.js";
import ordersModel from "../models/Orders.js";
import usersModel from "../models/Users.js";

function init_db() {
  mongo
    .connect(
      "mongodb+srv://musaz:1234@hospital.lrmunjo.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Connection Failed", err);
    });

  const db = mongo.connection;

  // db.once("open", () => {
  //   db.collection("orders").drop();
  //   db.collection("categories").drop();
  //   db.collection("items").drop();
  //   db.collection("users").drop();
  // });

  const Categories = new categoriesModel({ name: "Continental" });

  const item = new itemModel({
    title: "Biryani",
    description: "Sindhi Biryani",
    price: 123,
    categories: [Categories?._id],
  });

  const Orders = new ordersModel({
    status: false,
    items: [{ itemId: item._id, quantity: 5 }],
  });

  const Users = new usersModel({
    fullName: "Muhammad Musa Zulfiqar",
    email: "mz@hotmail.com",
    password: "creator@123",
  });

  async function getres() {
    const res1 = await Categories.save();
    const res2 = await item.save();
    const res3 = await Orders.save();
    const res4 = await Users.save();
    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
  }
  getres();
}

export { init_db };
