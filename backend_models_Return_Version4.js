import mongoose from "mongoose";
const returnSchema = new mongoose.Schema({
  type: { type: String, enum: ["customer", "vendor"], required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
  reason: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("Return", returnSchema);