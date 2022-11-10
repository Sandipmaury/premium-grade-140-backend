import mongoose from "mongoose";

const restautantSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    logo: { type: String, required: true },
    banner: { type: String, required: true },
    location: { type: String, required: true },
    discription: { type: String, required: true },
    food_type: { type: String, required: true },
    environment: { type: String },
    address: { type: String, required: true },
    opening_hours: { type: String, required: true },
    phone: { type: String, required: true },
    slide_image: [String],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("restautants", restautantSchema);
