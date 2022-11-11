import { RecipeModel } from "../models/recipes.model.js";

export const getRecipes = async (req, res) => {
  const query = req.query;
  try {
    const category = query?.category ? { catagory: query.category } : {};
    const title = query?.q ? { title: query.q } : {};
    const recipes = await RecipeModel.find({ ...category, ...title })
      .limit(query?.limit ? query.limit : 10)
      .skip(
        query?.limit ? query.limit * (query?.page - 1) : (query?.page - 1) * 10
      );
    res.status(200).json({ success: true, data: recipes });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};
