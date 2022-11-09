import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    birth: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    gender: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", userSchema);
