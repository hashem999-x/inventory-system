import mongoose from "mongoose";
const priceHistorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  oldPrice: Number,
  newPrice: Number,
  changedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  changedAt: { type: Date, default: Date.now }
});
export default mongoose.model("PriceHistory", priceHistorySchema);