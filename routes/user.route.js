import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import { gaurdMiddleware } from "../middleware/gaurd.middleware.js";

export const userRouter = Router();

userRouter.get("/", gaurdMiddleware, getUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
