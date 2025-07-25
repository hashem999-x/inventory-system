import mongoose from "mongoose";
const inventorySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  quantity: Number,
  expiryDate: Date,
  notes: String
});
export default mongoose.model("InventoryEntry", inventorySchema);