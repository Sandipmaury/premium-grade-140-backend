import { MealModel } from "../models/meal.model.js";

export const getMeals = async (req, res) => {
  const query = req.query;
  try {
    const category = query?.category ? { category: query.category } : {};
    const address = query?.address ? { address: query.address } : {};
    const title = query?.q ? { title: query.q } : {};
    const length = await MealModel.count({
      ...category,
      ...address,
      ...title,
    });
    const numberOfPages = Math.floor(
      length / Number(query?.limit ? query.limit : 10)
    );
    const data = await MealModel.find({ ...category, ...address, ...title })
      .limit(query?.limit ? query.limit : 10)
      .skip(
        query?.limit ? query.limit * (query?.page - 1) : (query?.page - 1) * 10
      );
    res
      .status(200)
      .json({ success: true, data: data, numberOfPages: numberOfPages });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

export const getSingleMeals = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await MealModel.find({ _id: id });
    res.status(200).json({ success: true, data: data });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};
