import { Router } from "express";
import { getMeals, getSingleMeals } from "../controllers/meal.controller.js";

export const mealRouter = Router();

mealRouter.get("/", getMeals);
mealRouter.get("/:id", getSingleMeals);
