import mongoose from "mongoose";
const reorderRequestSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  quantity: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["pending", "ordered", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("ReorderRequest", reorderRequestSchema);