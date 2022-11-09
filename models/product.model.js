import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  title: { type: String, require: true },
  s: { type: String, require: true },
  password: { type: String, require: true },
});

export const UserModel = mongoose.model("products", productSchema);
