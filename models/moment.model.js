import mongoose from "mongoose";

const momentSchema = new mongoose.Schema({
  authorname: { type: String, required: true },
  img: { type: String, required: true },
  date: { type: String, required: true },
  authorimg: { type: String, required: true },
  description: { type: String, required: true },
  Like: { type: Number, default: 0 },
  facebookname: { type: String },
  Comment: { type: Number, default: 0 },
  country: { type: String },
});

export const MomentModel = mongoose.model("moments", momentSchema);
