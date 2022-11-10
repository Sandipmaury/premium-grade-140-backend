import { MealModel } from "../models/meal.model.js";

export const getMeals = async (req, res) => {
  const query = req.query;
  try {
    const data = await MealModel.find()
      .limit(query?.limit ? query.limit : 10)
      .skip(
        query?.limit ? query.limit * (query?.page - 1) : (query?.page - 1) * 10
      );
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};
