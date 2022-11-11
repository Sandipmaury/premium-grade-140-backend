import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  time: { type: String, required: true },
  Like: { type: Number, default: 0 },
  catagory: { type: String, required: true },
  Comment: { type: Number, default: 0 },
});

export const RecipeModel = mongoose.model("recipes", recipeSchema);
