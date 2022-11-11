import mongoose from "mongoose";

const mealSchema = new mongoose.Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  discription: { type: String, required: true },
  rating: { type: Array, required: true },
  review: { type: Number, required: true },
  discount: { type: Number, required: true },
  category: { type: String, required: true },
  expire: { type: String, required: true },
  address: { type: String, required: true },
  restaurant: { type: String, required: true },
  price: { type: String, required: true },
  restautantId: { type: String, required: true },
  egg: { type: Boolean, required: true },
  milk: { type: Boolean, required: true },
  drink: { type: Boolean, required: true },
});

export const MealModel = mongoose.model("meals", mealSchema);
