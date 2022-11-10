import { Router } from "express";
import { getRecipes } from "../controllers/recipe.controller.js";

export const recipeRouter = Router();

recipeRouter.get("/", getRecipes);
