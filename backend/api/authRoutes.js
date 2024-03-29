import passport from "passport";
import express from "express";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

import "../controllers/Auth.js";

authRouter.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  }
);

authRouter.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        console.log(user);
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        };
        const token = jwt.sign({ user: body }, "TOP_SECRET");

        return res.json({ token, body });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default authRouter;
