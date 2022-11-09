import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    dis: { type: String, required: true },
    rating: { type: Array, required: true },
    review: { type: Number, required: true },
    contains: { type: Array, required: true },
    discount: { type: Number, required: true },
    avatar: { type: String, required: true },
    restaurant: { type: String, required: true },
    link: { type: String },
    category: { type: String, required: true },
    ingredient: { type: Array, required: true },
    location: { type: String, required: true },
    expire: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const MealModel = mongoose.model("meals", mealSchema);
