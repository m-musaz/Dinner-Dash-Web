import express from "express";
import router from "./app.js";
import mongoose from "mongoose";
// import { init_db } from "./databases/mongo_init.js"; // To Initialize the DB
import cors from "cors";
const port = 3001;
const app = express();

app.use(
  cors({
    origin: ["https://dinner-dash-web.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

// app.use("/", router);

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => {
  console.log("Serving running on port", port);
});

mongoose
  .connect(
    "mongodb+srv://musaz:1234@hospital.lrmunjo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

// init_db(); // To Initialize the DB

module.exports = app;
