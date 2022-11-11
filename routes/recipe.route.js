import { Router } from "express";
import {
  getRecipes,
  getSingleRecipe,
} from "../controllers/recipe.controller.js";

export const recipeRouter = Router();

recipeRouter.get("/", getRecipes);
recipeRouter.get("/:id", getSingleRecipe);
