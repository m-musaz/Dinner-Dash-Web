import express from "express";
import router from "./routes/index.js";
import mongoose from "mongoose";
// import { init_db } from "./databases/mongo_init.js"; // To Initialize the DB
import cors from "cors";
const port = 3000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/", router);

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
