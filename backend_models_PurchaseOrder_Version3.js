import mongoose from "mongoose";
const purchaseOrderSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    price: Number
  }],
  status: { type: String, enum: ["pending", "approved", "received"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model("PurchaseOrder", purchaseOrderSchema);