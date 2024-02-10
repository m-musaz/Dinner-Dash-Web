import express from "express";
import passport from "passport";
import categoriesRouter from "./categoriesRoutes.js";
import itemsRouter from "./itemRoutes.js";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import checkAdmin from "../middlewares/checkAdmin.js";
import adminRouter from "./adminRoutes.js";
import "../controllers/Auth.js";
const router = express.Router();

router.use("/categories", categoriesRouter);
router.use("/items", itemsRouter);

router.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  userRouter
);

router.use(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  checkAdmin,
  adminRouter
);

router.use("/", authRouter);

export default router;
