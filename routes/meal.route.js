import { Router } from "express";
import { getMeals } from "../controllers/meal.controller.js";

export const mealRouter = Router();

mealRouter.get("/", getMeals);
