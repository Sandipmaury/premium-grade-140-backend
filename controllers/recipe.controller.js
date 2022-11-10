import { RecipeModel } from "../models/recipes.model.js";

export const getRecipes = async (req, res) => {
  const query = req.query;
  try {
    const recipes = await RecipeModel.find()
      .limit(query?.limit ? query.limit : 10)
      .skip(
        query?.limit ? query.limit * (query?.page - 1) : (query?.page - 1) * 10
      );
    res.status(200).json({ success: true, data: recipes });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};
