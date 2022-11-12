import { Router } from "express";
import {
  getMomentData,
  getSingleMomentData,
} from "../controllers/moment.controller.js";

export const momentRouter = Router();

momentRouter.get("/", getMomentData);
momentRouter.get("/:id", getSingleMomentData);
